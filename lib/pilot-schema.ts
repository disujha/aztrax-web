import { z } from 'zod';

export const siteTypeOptions = [
  'EPC contractor yard',
  'Stores & warehouse',
  'Fabrication bay / shop',
  'Plant / refinery area',
  'Equipment rental yard',
  'Construction project site',
  'Other industrial site',
] as const;

export const industryOptions = [
  'EPC / Construction',
  'Telecom Infrastructure',
  'EV Charging Infrastructure',
  'Warehouse / CFA Operations',
  'Manufacturing & Plant Operations',
  'Facility & Equipment Management',
  'Industrial Equipment Rental',
  'Commercial / Commuter Parking',
  'Other Industrial Operation',
] as const;

export const pilotAreaAccessOptions = ['Yes', 'No', 'Not sure'] as const;

export const pilotRequestSchema = z.object({
  fullName: z.string().trim().min(2, 'Full name is required'),
  companyName: z.string().trim().min(2, 'Company name is required'),
  contactInfo: z.string().trim().min(5, 'Work email or phone number is required'),
  siteType: z.string().trim().min(1, 'Please select a site type'),
  assetTypes: z.array(z.string()).min(1, 'Select at least one asset type'),
  lastLostAssetCost: z.string().trim().optional(),

  // Legacy field support for admin dashboard compatibility
  workEmail: z.string().trim().optional(),
  phone: z.string().trim().optional(),
  jobTitle: z.string().trim().optional(),
  industry: z.string().trim().optional(),
  assetDescription: z.string().trim().optional(),
  assetCount: z.string().trim().optional(),
  assetLocation: z.string().trim().optional(),
  currentProcess: z.string().trim().optional(),
  pilotAreaAccess: z.string().trim().optional(),
  notes: z.string().trim().optional(),
});

export type PilotRequestInput = z.infer<typeof pilotRequestSchema>;

export interface PilotRequestRecord extends PilotRequestInput {
  id: string;
  createdAt: string;
  status: 'PENDING_REVIEW' | 'CONTACTED' | 'QUALIFIED' | 'PILOT_SCHEDULED' | 'DECLINED';
  reviewNotes?: string;
}
