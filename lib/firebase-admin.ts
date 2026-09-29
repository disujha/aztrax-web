import { getApps, initializeApp, cert, App } from 'firebase-admin/app';
import { getFirestore, FieldValue, Firestore, QueryDocumentSnapshot } from 'firebase-admin/firestore';
import type { PilotRequestRecord } from './pilot-schema';

let firestoreInstance: Firestore | null = null;

function getAdminFirestore(): Firestore | null {
  if (firestoreInstance) return firestoreInstance;

  const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined;

  let app: App;

  if (getApps().length > 0) {
    app = getApps()[0]!;
    firestoreInstance = getFirestore(app);
    return firestoreInstance;
  }

  if (projectId && clientEmail && privateKey) {
    try {
      app = initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });
      firestoreInstance = getFirestore(app);
      return firestoreInstance;
    } catch (err) {
      console.warn('Firebase admin initialization failed with cert:', err);
    }
  } else if (projectId) {
    try {
      app = initializeApp({
        projectId,
      });
      firestoreInstance = getFirestore(app);
      return firestoreInstance;
    } catch (err) {
      console.warn('Firebase admin initialization failed with default app:', err);
    }
  }

  return null;
}

// In-memory fallback repository for local testing or when Firebase env vars are not yet configured
const inMemoryPilotStore: PilotRequestRecord[] = [];

export async function savePilotRequest(
  record: PilotRequestRecord
): Promise<{ success: boolean; storage: 'firestore' | 'local_fallback' }> {
  const db = getAdminFirestore();

  if (db) {
    try {
      await db.collection('pilot_requests').doc(record.id).set({
        ...record,
        submittedAtServerTime: FieldValue.serverTimestamp(),
      });
      return { success: true, storage: 'firestore' };
    } catch (firestoreErr) {
      console.error('Error persisting to Firestore, storing in fallback storage:', firestoreErr);
    }
  }

  // Graceful local store fallback (allows offline / local testing without crashing)
  inMemoryPilotStore.push(record);
  console.log(
    `[AZTRAX PILOT DISPATCH] New pilot request recorded [ID: ${record.id}] for ${record.companyName} (${record.workEmail})`
  );
  return { success: true, storage: 'local_fallback' };
}

export async function getPilotRequests(): Promise<PilotRequestRecord[]> {
  const db = getAdminFirestore();
  if (db) {
    try {
      const snap = await db.collection('pilot_requests').orderBy('createdAt', 'desc').get();
      return snap.docs.map((doc: QueryDocumentSnapshot) => doc.data() as PilotRequestRecord);
    } catch (err) {
      console.warn('Could not query Firestore:', err);
    }
  }
  return inMemoryPilotStore;
}
