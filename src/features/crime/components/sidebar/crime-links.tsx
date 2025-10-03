import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CrimeLinks() {
  return (
    <nav>
      <Link href={'/crime/stats'} className="flex flex-row items-center justify-between border-b py-2">
        <span>Crime Stats</span>
        <ChevronRight className="size-5 pt-1" />
      </Link>
      <Link href={'/crime/stops'} className="flex flex-row items-center justify-between border-b py-2">
        <span>Stop & Search</span>
        <ChevronRight className="size-5 pt-1" />
      </Link>
      <Link href={'/crime/stolen-report'} className="flex flex-row items-center justify-between border-b py-2">
        <span>Report A Stolen Vehicle</span>
        <ChevronRight className="size-5 pt-1" />
      </Link>
    </nav>
  )
}

