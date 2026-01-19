export interface TestConnectionModel {
  status: string;
  timestamp: string;
}

export interface ConnectionResultModel {
  success: boolean;
  message: string;
  data?: TestConnectionModel;
  error?: string;
}