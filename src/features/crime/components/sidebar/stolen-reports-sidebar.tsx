import Image from "next/image"
import { getAllPublishedReportsAction } from "../../crime-actions"
import { Badge } from "@/components/ui/badge"

export default async function StolenReportsSidebar() {

  const reports = await getAllPublishedReportsAction(6)
  if (!reports) return null
  return (
    <div className="space-y-4 p-2">
      {reports.map((report) => (
        <div key={report.id} className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Image src={report.image} alt={report.make + report.model} width={75} height={55} className="h-18 w-full" />
            {report.found === true && (
              <Badge className="absolute top-2 left-2" variant={'destructive'}>Found</Badge>
            )}
          </div>
          <div className="flex-1 ">
            <div className="flex flex-col">
              <span className="font-bold">{report.registration}</span>
              <span className="text-xs">{report.make}</span>
              <span className="text-xs">{report.model}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

