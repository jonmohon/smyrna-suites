"use client";

import dynamic from "next/dynamic";

const CanvasCursor = dynamic(() => import("@/components/CanvasCursor"), {
  ssr: false,
});

export default function LazyCanvasCursor() {
  return <CanvasCursor />;
}
