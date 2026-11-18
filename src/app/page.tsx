"use client";

import React, { useState, useEffect } from "react";
import { BannerAnalyticItem } from "@/types/analytics";
import { fetchBannerAnalytics } from "@/services/analyticsService";
import { BannerCard } from "@/components/BannerCard";

export default function DashboardPage() {
  const [banners, setBanners] = useState<BannerAnalyticItem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const data = await fetchBannerAnalytics();
    setBanners(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Simple Clean Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Banner Analytics Report</h1>
            <p className="text-xs text-slate-500 mt-1">
              HEY Play • Performance Overview
            </p>
          </div>
          <button
            onClick={loadData}
            className="text-xs bg-white hover:bg-slate-50 text-slate-700 font-medium px-4 py-2 rounded-lg border border-slate-300 shadow-sm transition-colors self-start sm:self-auto"
          >
            {loading ? "Updating..." : "Refresh Report"}
          </button>
        </div>

        {/* Banner List */}
        {loading ? (
          <div className="py-20 text-center text-sm text-slate-400">
            Loading data...
          </div>
        ) : (
          <div className="space-y-6">
            {banners.map((banner) => (
              <BannerCard key={banner.id} banner={banner} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
