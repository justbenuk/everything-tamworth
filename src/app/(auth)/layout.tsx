import { LayoutProps } from "@/types";
import Link from "next/link";
import { ComputerIcon } from "lucide-react";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href={"/"} className="flex items-center gap-2 font-medium">
            <ComputerIcon className="size-4" />
            <span>Everything Tamworth</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">image goes here</div>
    </div>
  );
}
