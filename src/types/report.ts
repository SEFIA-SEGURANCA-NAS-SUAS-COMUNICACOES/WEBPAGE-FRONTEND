export enum Reputation {
  SAFE = "SAFE",
  ATTENTION = "ATTENTION",
  SUSPICIOUS = "SUSPICIOUS",
  HIGH_RISK = "HIGH_RISK",
}

export enum FraudType {
  SCAM = "SCAM",
  FAKE_BANK = "FAKE_BANK",
  FAKE_JOB = "FAKE_JOB",
  FAKE_PRIZE = "FAKE_PRIZE",
  FAKE_SUPPORT = "FAKE_SUPPORT",
  SPAM = "SPAM",
  OTHER = "OTHER",
}

export interface ReportPayload {
  reporterPhoneNumber: string;
  reportedPhoneNumber: string;
  fraudType: FraudType;
  description: string;
  anonymous: boolean;
}
