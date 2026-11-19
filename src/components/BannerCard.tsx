"use client";

import React from "react";
import { BannerAnalyticItem } from "@/types/analytics";
import { DemographicCard } from "./DemographicCard";

interface BannerCardProps {
  banner: BannerAnalyticItem;
}

export const BannerCard: React.FC<BannerCardProps> = ({ banner }) => {
  const { metrics } = banner;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Top Banner Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{banner.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
            📅 {banner.dateRange}
          </span>
        </div>
      </div>

      {/* Main Body: Banner Image + Info Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5 items-center">
        {/* Banner Preview Image (Left) */}
        <div className="lg:col-span-5">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-video shadow-sm">
            {banner.imageUrl ? (
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm text-slate-400">
                No banner image available
              </div>
            )}
          </div>
        </div>

        {/* Analytics Info (Right) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Key Metrics in 3 clean cards */}
          <div className="grid grid-cols-3 gap-3">
            {/* Click Count */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-center">
              <div className="text-xs text-slate-500 font-medium">Click Count</div>
              <div className="text-2xl font-bold text-slate-900 mt-1">
                {metrics.clickCount.toLocaleString()}
              </div>
            </div>

            {/* View */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-center">
              <div className="text-xs text-slate-500 font-medium">View</div>
              <div className="text-2xl font-bold text-slate-900 mt-1">
                {metrics.viewCount.toLocaleString()}
              </div>
            </div>

            {/* Average Second View */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-center">
              <div className="text-xs text-slate-500 font-medium">Average View</div>
              <div className="text-2xl font-bold text-slate-900 mt-1">
                {metrics.avgSecondView} <span className="text-xs font-normal text-slate-500">sec</span>
              </div>
            </div>
          </div>

          {/* Audience Demographic */}
          <DemographicCard demographic={metrics.demographic} />
        </div>
      </div>
    </div>
  );
};
