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

// Backend API Service for v2.heyplaymyanmar.com
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://v2.heyplaymyanmar.com/api";

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
