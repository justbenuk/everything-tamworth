import PageContainer from "@/components/page-container"
import { getAllStopSearchAction } from "@/features/crime/crime-actions"
import { Metadata } from "next"
import Link from "next/link"
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale/en-GB'
import StopsMapOuter from "@/features/maps/stops-map-outer"
import SectionTitle from "@/components/section-title"

export const metadata: Metadata = {
  title: 'Recorded Stop and Search&apos;s',
  description: 'All Stop and Search&apos;s recorded to staffordshire police that have occured in Tamworth'
}

export default async function StopsPage() {
  const pop = 78647
  const { stops, lastUpdated, success, message } = await getAllStopSearchAction()
  const formatedDate = format(lastUpdated.date, "LLLL uuuu", { locale: enGB })
  const population = new Intl.NumberFormat("en-GB").format(pop)
  const percentage = (stops.length / pop) * 1000;


  if (!success) {
    return (
      <div className="p-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold text-teal-500">Failed to load Map Data</h1>
          <span className="text-red-500 capitalize">Error: {message}</span>
          <span>There was an error loading data from the Police API. If problem persists, <Link className="text-teal-500 font-medium" href={'/contact'}>Please Email Support</Link> </span>
        </div>
      </div>
    )
  }


  return (
    <PageContainer className="space-y-2">
      <div>
        <SectionTitle title="Stop & search" />
        <StopsMapOuter searches={stops} />
      </div>
      <div className="flex flex-row justify-end items-center">
        <div className="font-medium italic text-xs">Last Updated: {formatedDate}</div>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <SectionTitle title="Total Stops" />
          <div className="flex flex-col items-center justify-center text-3xl py-4">
            {stops.length}
          </div>
        </div>
        <div>
          <SectionTitle title="Population" />
          <div className="flex flex-col items-center justify-center text-3xl py-4">
            {population}
          </div>
        </div>
        <div>
          <SectionTitle title="Percentage Per 1000 Residents" />
          <div className="flex flex-col items-center justify-center text-3xl py-4">
            {percentage.toFixed(2) + '%'}
          </div>
        </div>
      </div>
    </PageContainer >
  )
}

