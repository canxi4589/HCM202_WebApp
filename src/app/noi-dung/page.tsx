"use client";

import Header from "@/components/header";
import IndependenceIssues from "@/components/independence-issues-step";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const DocLapDanToc = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <IndependenceIssues />
      {/* <button
        onClick={() => router.push("/")}
        className="fixed left-2 top-24 sm:left-6 sm:top-24 z-40 flex items-center gap-1 sm:gap-2 
                   bg-white/90 hover:bg-white text-red-800 font-semibold 
                   px-2 py-2 sm:px-4 sm:py-2 rounded-lg shadow-lg backdrop-blur-sm
                   transition-all duration-300 hover:scale-105 cursor-pointer
                   text-xs sm:text-sm"
      >
        <ArrowLeft className="w-5 h-5" />
        Trang chủ
      </button> */}
    </div>
  );
};

export default DocLapDanToc;
