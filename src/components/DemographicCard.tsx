"use client";

import React from "react";
import { DemographicData } from "@/types/analytics";

interface DemographicCardProps {
  demographic: DemographicData;
}

export const DemographicCard: React.FC<DemographicCardProps> = ({ demographic }) => {
  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-slate-600">Audience Demographic</span>
        <span className="text-xs text-slate-500">
          Male {demographic.malePercentage}% / Female {demographic.femalePercentage}%
        </span>
      </div>

      {/* Clean Dual-Color Bar */}
      <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden flex mb-2.5">
        <div
          style={{ width: `${demographic.malePercentage}%` }}
          className="h-full bg-blue-600"
        />
        <div
          style={{ width: `${demographic.femalePercentage}%` }}
          className="h-full bg-rose-500"
        />
      </div>

      <div className="flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
          <span>Male: <strong className="text-slate-800">{demographic.malePercentage}%</strong> ({demographic.maleCount.toLocaleString()})</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
          <span>Female: <strong className="text-slate-800">{demographic.femalePercentage}%</strong> ({demographic.femaleCount.toLocaleString()})</span>
        </div>
      </div>
    </div>
  );
};
