import { z } from 'zod';

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
  fullName: z.string().trim().min(2, 'Full name is required (at least 2 characters)'),
  companyName: z.string().trim().min(2, 'Company or organisation name is required'),
  workEmail: z.string().trim().email('Please provide a valid work email address'),
  phone: z.string().trim().min(7, 'Please provide a valid contact phone number'),
  jobTitle: z.string().trim().min(2, 'Job title is required'),
  industry: z.enum(industryOptions, {
    message: 'Please select an industry category',
  }),
  assetDescription: z
    .string()
    .trim()
    .min(5, 'Please specify the high-value physical assets you want to protect'),
  assetCount: z
    .string()
    .trim()
    .min(1, 'Please indicate approximate number of pilot assets (e.g. 3-5 units)'),
  assetLocation: z
    .string()
    .trim()
    .min(3, 'Please describe where assets are stationed (e.g. EPC yard in Gujarat, EV charging depot)'),
  currentProcess: z
    .string()
    .trim()
    .min(
      5,
      'Please mention what currently happens if an asset goes missing or is moved unexpectedly'
    ),
  pilotAreaAccess: z.enum(pilotAreaAccessOptions, {
    message: 'Please indicate whether you can provide access to a suitable non-hazardous pilot area',
  }),
  notes: z.string().trim().optional(),
});

export type PilotRequestInput = z.infer<typeof pilotRequestSchema>;

export interface PilotRequestRecord extends PilotRequestInput {
  id: string;
  createdAt: string;
  status: 'PENDING_REVIEW' | 'CONTACTED' | 'QUALIFIED' | 'PILOT_SCHEDULED' | 'DECLINED';
  reviewNotes?: string;
}
