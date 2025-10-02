import Link from "next/link";
import StolenReportsSidebar from "./stolen-reports-sidebar";

export default function CrimeSidebar() {
  return (
    <aside className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
      <div>
        <div className="border overflow-hidden">
          <div className="bg-teal-500 p-2 text-white font-semibold">Stolen Vehicles</div>
          <StolenReportsSidebar />
          <div className="flex flex-row justify-end pr-2 pb-2">
            <Link href={'/'} className="text-xs italic">View All</Link>
          </div>
        </div>
      </div>
    </aside>
  )
}

