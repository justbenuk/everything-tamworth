import React from "react";
import { SearchListProps } from "@/types";
import StopsMapInner from "./stops-map-inner";

export default function StopsMapOuter({ searches }: SearchListProps) {
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-teal-500 p-2 rounded-2xl my-5">
        <h1 className="font-medium text-white">Stop and Search&apos;s Recoreded</h1>
      </div>
      <div className="overflow-hidden">
        <StopsMapInner searches={searches} />
      </div>
    </>
  );
}
