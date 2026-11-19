"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BannerCard } from "@/components/BannerCard";
import { NoReport } from "@/components/NoReport";
import { fetchBannerAnalyticsByToken } from "@/services/analyticsService";
import { BannerAnalyticItem } from "@/types/analytics";

export default function BannerAnalyticsPage() {
  const { token } = useParams<{ token: string }>();
  const [banners, setBanners] = useState<BannerAnalyticItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchBannerAnalyticsByToken(token, signal);
      setBanners(data);
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }

      setError(
        err instanceof Error ? err.message : "Unable to load analytics data.",
      );
      setBanners(null);
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  }, [token]);

  useEffect(() => {
    const controller = new AbortController();
    void loadData(controller.signal);

    return () => controller.abort();
  }, [loadData]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Banner Analytics Report
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              HEY Play • Performance Overview
            </p>
          </div>
          <button
            onClick={() => void loadData()}
            disabled={loading}
            className="text-xs bg-white hover:bg-slate-50 text-slate-700 font-medium px-4 py-2 rounded-lg border border-slate-300 shadow-sm transition-colors self-start sm:self-auto disabled:opacity-50"
          >
            {loading ? "Updating..." : "Refresh Report"}
          </button>
        </div>

        {loading ? (
          <div className="py-20 text-center text-sm text-slate-400">
            Loading data...
          </div>
        ) : error ? (
          <div
            role="alert"
            className="py-20 text-center text-sm text-red-600"
          >
            Unable to load this report: {error}
          </div>
        ) : banners?.length ? (
          <div className="space-y-6">
            {banners.map((banner) => (
              <BannerCard key={banner.id} banner={banner} />
            ))}
          </div>
        ) : (
          <NoReport compact />
        )}
      </div>
    </main>
  );
}
