'use server'

import { db } from "@/lib/db"
import { isAdmin } from "../auth/auth-actions"

export async function adminGetAllPendingReportsaction() {
  await isAdmin()
  const reports = await db.stolenReport.findMany({
    where: {
      published: false
    }
  })
  return reports
}
