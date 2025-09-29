import React from "react";
import { SearchListProps } from "@/types";
import StopsMapInner from "./stops-map-inner";

export default function StopsMapOuter({ searches }: SearchListProps) {
  return (
    <>
      <div className="overflow-hidden">
        <StopsMapInner searches={searches} />
      </div>
    </>
  );
}
