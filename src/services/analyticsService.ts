import { BannerAnalyticItem } from "@/types/analytics";

export const MOCK_BANNERS: BannerAnalyticItem[] = [
  {
    id: "banner-1",
    title: "HeyPlay Mega Tournament 2026",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    targetUrl: "https://v2.heyplaymyanmar.com/tournament/mega-2026",
    placement: "Home Screen Top Hero Banner",
    status: "active",
    dateRange: "10 Nov 2026 - 17 Nov 2026",
    createdAt: "2026-11-01",
    metrics: {
      clickCount: 14850,
      viewCount: 125400,
      avgSecondView: 3.4,
      ctr: 11.84,
      demographic: {
        maleCount: 82764,
        femaleCount: 42636,
        malePercentage: 66,
        femalePercentage: 34,
      },
    },
  },
  {
    id: "banner-2",
    title: "Weekend Coin Topup Bonus (50% Extra)",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    targetUrl: "https://v2.heyplaymyanmar.com/shop/topup-bonus",
    placement: "In-Game Lobby Pop-up",
    status: "active",
    dateRange: "14 Nov 2026 - 16 Nov 2026",
    createdAt: "2026-11-10",
    metrics: {
      clickCount: 8920,
      viewCount: 68300,
      avgSecondView: 3.1,
      ctr: 13.06,
      demographic: {
        maleCount: 46444,
        femaleCount: 21856,
        malePercentage: 68,
        femalePercentage: 32,
      },
    },
  },
  {
    id: "banner-3",
    title: "New Game Launch: Shan Koe Mee Deluxe",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
    targetUrl: "https://v2.heyplaymyanmar.com/games/skm-deluxe",
    placement: "Games Category Sidebar",
    status: "paused",
    dateRange: "01 Nov 2026 - 15 Nov 2026",
    createdAt: "2026-10-25",
    metrics: {
      clickCount: 5410,
      viewCount: 49800,
      avgSecondView: 2.8,
      ctr: 10.86,
      demographic: {
        maleCount: 30876,
        femaleCount: 18924,
        malePercentage: 62,
        femalePercentage: 38,
      },
    },
  },
];

interface BackendAnalyticsResponse {
  success: boolean;
  data?: {
    id: number | string;
    title: string;
    starts_at: string;
    ends_at: string;
    metrics?: Array<{
      banner_image: string | null;
      click_count: number | string;
      view_count: number | string;
      avg_view_seconds: number | string;
      male_percentage: number | string;
      female_percentage: number | string;
    }>;
  } | null;
}

export async function fetchBannerAnalyticsByToken(
  token: string,
  signal?: AbortSignal,
): Promise<BannerAnalyticItem | null> {
  const res = await fetch(
    `/api/analytics/${encodeURIComponent(token)}`,
    { signal },
  );

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch analytics (${res.status})`);
  }

  const response = (await res.json()) as BackendAnalyticsResponse;
  const record = response.data;
  const metrics = record?.metrics?.[0];

  if (!response.success || !record || !metrics) {
    return null;
  }

  const clickCount = Number(metrics.click_count);
  const viewCount = Number(metrics.view_count);
  const maleValue = Number(metrics.male_percentage);
  const femaleValue = Number(metrics.female_percentage);
  const demographicTotal = maleValue + femaleValue;
  const malePercentage =
    demographicTotal > 0 ? Number(((maleValue / demographicTotal) * 100).toFixed(2)) : 0;
  const femalePercentage =
    demographicTotal > 0 ? Number((100 - malePercentage).toFixed(2)) : 0;

  if (
    !Number.isFinite(clickCount) ||
    !Number.isFinite(viewCount) ||
    !Number.isFinite(Number(metrics.avg_view_seconds)) ||
    !Number.isFinite(maleValue) ||
    !Number.isFinite(femaleValue)
  ) {
    throw new Error("The API returned invalid analytics values.");
  }

  return {
    id: String(record.id),
    title: record.title,
    imageUrl: metrics.banner_image ?? "",
    dateRange: `${record.starts_at} - ${record.ends_at}`,
    metrics: {
      clickCount,
      viewCount,
      avgSecondView: Number(metrics.avg_view_seconds),
      ctr: viewCount > 0 ? Number(((clickCount / viewCount) * 100).toFixed(2)) : 0,
      demographic: {
        malePercentage,
        femalePercentage,
      },
    },
  };
}

export async function fetchBannerAnalytics(): Promise<BannerAnalyticItem[]> {
  try {
    // Backend API ချိတ်ဆက်ရန်:
    /*
    const res = await fetch(`${API_BASE_URL}/analytics/banners`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error("Failed to fetch data");
    return await res.json();
    */

    return MOCK_BANNERS;
  } catch (err) {
    console.error("API Fetch Error:", err);
    return MOCK_BANNERS;
  }
}
