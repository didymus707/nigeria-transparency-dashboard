export type NigerianState =
  | 'Abia'
  | 'Adamawa'
  | 'Akwa Ibom'
  | 'Anambra'
  | 'Bauchi'
  | 'Bayelsa'
  | 'Benue'
  | 'Borno'
  | 'Cross River'
  | 'Delta'
  | 'Ebonyi'
  | 'Edo'
  | 'Ekiti'
  | 'Enugu'
  | 'FCT'
  | 'Gombe'
  | 'Imo'
  | 'Jigawa'
  | 'Kaduna'
  | 'Kano'
  | 'Katsina'
  | 'Kebbi'
  | 'Kogi'
  | 'Kwara'
  | 'Lagos'
  | 'Nasarawa'
  | 'Niger'
  | 'Ogun'
  | 'Ondo'
  | 'Osun'
  | 'Oyo'
  | 'Plateau'
  | 'Rivers'
  | 'Sokoto'
  | 'Taraba'
  | 'Yobe'
  | 'Zamfara';

export type FlagReason =
  | 'single_bid'
  | 'threshold_splitting'
  | 'no_tender_notice'
  | 'inflated_value'
  | 'dormant_vendor';

export interface Contract {
  id: string;
  title: string;
  description: string | null;
  value: number | null;
  currency: string;
  status: 'planning' | 'tender' | 'award' | 'contract' | 'implementation';
  buyer: {
    id: string;
    name: string;
    state: NigerianState;
  };
  supplier: {
    id: string;
    name: string;
  } | null;
  datePublished: string;
  dateAwarded: string | null;
  isSingleBid: boolean;
  isFlagged: boolean;
  flagReasons: FlagReason[];
}

export interface Budget {
  id: string;
  mda: string;
  state: NigerianState;
  year: number;
  allocated: number;
  actual: number | null;
  sector: string;
}

export interface RiskFlag {
  contractId: string;
  reason: FlagReason;
  severity: 'low' | 'medium' | 'high';
  detectedAt: string;
  summary: string;
}
