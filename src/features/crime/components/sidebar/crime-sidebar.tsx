import { BookCheckIcon } from "lucide-react";
import Link from "next/link";

export default function CrimeSidebar() {
  return (
    <aside>
      <div className="border-2 border-dashed border-teal-500 bg-teal-500/10 rounded-2xl">
        <Link href={'/crime/stolen-report'} className="flex flex-row items-center justify-center h-18 gap-4 text-teal-500 font-medium">
          <BookCheckIcon />
          <span>Report Your Stolen Item</span>
        </Link>
      </div>
    </aside>
  )
}

