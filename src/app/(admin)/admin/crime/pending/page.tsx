import { adminGetAllPendingReportsaction } from "@/features/admin/admin-crime-actions"
import PendingReportsTable from "@/features/admin/tables/pending-reports-table"

export default async function PendingReports() {

  const reports = await adminGetAllPendingReportsaction()
  if (!reports) {
    return null
  }

  return (
    <div>
      <PendingReportsTable reports={reports} />
    </div>
  )
}

