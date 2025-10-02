import { adminGetAllReportsaction } from "@/features/admin/admin-crime-actions"
import AllReportsTable from "@/features/admin/tables/all-reports-table"

export default async function AllReports() {

  const reports = await adminGetAllReportsaction()
  if (!reports) {
    return null
  }

  return (
    <div>
      <AllReportsTable reports={reports} />
    </div>
  )
}

