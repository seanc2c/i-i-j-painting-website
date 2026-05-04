"use client";

import dynamic from "next/dynamic";

// Lazy-load the R3F scene client-only to keep main bundle slim
export const BlueprintScene = dynamic(() => import("./BlueprintCanvas"), {
  ssr: false,
  loading: () => null,
});
