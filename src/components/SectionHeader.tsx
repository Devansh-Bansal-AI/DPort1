import React from "react";
import { ACCENT_COLOR } from "../utils/constants";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl text-white font-bold relative inline-block">
      {title}
      <span className="absolute left-1/2 -translate-x-1/2 w-1/3 h-1 rounded-full bottom-[-10px]"
            style={{ backgroundColor: ACCENT_COLOR }} />
    </h2>
    <p className="text-gray-400 mt-4">{subtitle}</p>
  </div>
);

export default SectionHeader;
