import { cn } from "@/lib/utils";
import { RootProps } from "@/types";
import React from "react";

interface ContainerProps extends RootProps {
  className?: string;
}

export default function PageContainer({ children, className }: ContainerProps) {
  return <div className={cn("max-w-7xl mx-auto px-6 2xl:px-0 w-full", className)}>{children}</div>;
}
