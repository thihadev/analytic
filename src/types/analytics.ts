export interface DemographicData {
  maleCount?: number;
  femaleCount?: number;
  malePercentage: number;
  femalePercentage: number;
}

export interface BannerAnalyticItem {
  id: string;
  title: string;
  imageUrl: string;
  targetUrl?: string;
  placement?: string;
  status?: "active" | "paused" | "expired";
  dateRange: string; // Text အနေနဲ့ Backend က manual ပို့ပေးမည့် Date Range (ဥပမာ "Nov 01, 2026 - Nov 15, 2026")
  createdAt?: string;
  metrics: {
    clickCount: number;
    viewCount: number;
    avgSecondView: number; // e.g. 3.0 sec
    ctr: number; // Click-through rate (%)
    demographic: DemographicData;
  };
}
