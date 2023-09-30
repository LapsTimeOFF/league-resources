export interface GrandPrixResponse {
  data: Data;
}

export interface Data {
  // grandPrixes: GrandPrixes;
  grandsPrix: GrandPrixes;
}

export interface GrandPrixes {
  data: GrandPrixesDatum[];
}

export interface GrandPrixesDatum {
  id: string;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  uid: string;
  name: string;
  circuit: string;
  country: string;
  country_flag: string;
  info: string;
  finished: boolean;
  startTime: Date;
  endTime: Date;
  fia_documents: FiaDocuments;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface FiaDocuments {
  data: FiaDocumentsDatum[];
}

export interface FiaDocumentsDatum {
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  uid: string;
  title: string;
  upload_date: Date;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  document: Document;
  type: FiaDocumentType;
  session: {
    data: {
      attributes: {
        type: SessionType;
      };
    };
  };
}

export enum SessionType {
  Practice = "practice",
  Qualifying = "qualifying",
  Race = "race",
  Session = "session",
}

export enum FiaDocumentType {
  Info = "info",
  InvestigationPenaltyTime = "investigation_penalty_time",
  InvestigationPenaltyGridDrop = "investigation_penalty_grid_drop",
  InvestigationPenaltyNFA = "investigation_no_further_action",
  InvestigationRightOfReviewPenaltyTime = "investigation_right_of_review_penalty_time",
  InvestigationRightOfReviewPenaltyGridDrop = "investigation_right_of_review_penalty_grid_drop",
  InvestigationRightOfReviewPenaltyNFA = "investigation_right_of_review_penalty_no_further_action",
}

export interface Document {
  data: DocumentDatum[];
}

export interface DocumentDatum {
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  name: string;
  size: number;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  ext: string;
  mime: string;
  previewUrl: null;
}
