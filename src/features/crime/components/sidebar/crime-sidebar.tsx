import Link from "next/link";
import StolenReportsSidebar from "./stolen-reports-sidebar";
import SectionTitle from "@/components/section-title";
import CrimeLinks from "./crime-links";

export default function CrimeSidebar() {
  return (
    <aside className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-10">
      <div>
        <SectionTitle title="Crime Links" />
        <CrimeLinks />
      </div>
      <div>
        <SectionTitle title="Important Links" />
        <CrimeLinks />
      </div>
      <div>
        <SectionTitle title='Stolen Vehicles' />
        <StolenReportsSidebar />
        <div className="flex flex-row justify-end pr-2 pb-2">
          <Link href={'/'} className="text-xs italic">View All</Link>
        </div>
      </div>
      <div>
        <SectionTitle title="Important Links" />
        <CrimeLinks />
      </div>

    </aside>
  )
}

