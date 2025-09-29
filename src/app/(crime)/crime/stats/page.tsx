import PageContainer from "@/components/page-container"
import { getAllCrimesAction } from "@/features/crime/crime-actions"
import CrimeMapOuter from "@/features/maps/crime-map-outer"
import { Metadata } from "next"
import Link from "next/link"
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale/en-GB'
import { CrimeProps } from "@/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PageTitle from "@/components/page-title"

export const metadata: Metadata = {
  title: 'Recorded Crimes',
  description: 'All crimes recorded to staffordshire police that have occured in Tamworth'
}

export default async function StatsPage() {
  const pop = 78647
  const { merged, lastUpdated, success, message } = await getAllCrimesAction()
  const formatedDate = format(lastUpdated.date, "LLLL uuuu", { locale: enGB })
  const categories: string[] = Array.from(new Set(merged.map((c: CrimeProps) => c.category)))
  const population = new Intl.NumberFormat("en-GB").format(pop)
  const percentage = (merged.length / pop) * 1000;


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
      <PageTitle title="Recorded Crimes" description="All crimes recorded in Tamworth over the month." />
      <CrimeMapOuter crimes={merged} categories={categories} />
      <div className="flex flex-row justify-end items-center">
        <div className="font-medium italic text-xs">Last Updated: {formatedDate}</div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-500">Total Crimes</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center text-3xl">
            {merged.length}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-500">Total Population</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center text-3xl">
            {population}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-500">Percentage Per Population</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center text-3xl">
            {percentage.toFixed(0) + '%'}
          </CardContent>
        </Card>
      </div>
    </PageContainer >
  )
}

