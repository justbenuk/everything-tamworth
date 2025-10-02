'use server'

import { db } from "@/lib/db"
import { isAdmin } from "../auth/auth-actions"
import { revalidatePath } from "next/cache"

export async function adminGetAllPendingReportsaction() {
  await isAdmin()
  const reports = await db.stolenReport.findMany({
    where: {
      published: false
    }
  })
  return reports
}

export async function adminGetAllReportsaction() {
  await isAdmin()
  const reports = await db.stolenReport.findMany()
  return reports
}

export async function deleteStolenReportAction(id: string) {
  await isAdmin()

  try {
    await db.stolenReport.delete({
      where: {
        id
      }
    })
    revalidatePath('/admin/crime/pending')
    return { success: true, message: 'Report Deleted' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to delete report' }
  }
}
export async function updateStolenReportFeaturedAction(id: string, featured: boolean) {
  await isAdmin()

  try {
    await db.stolenReport.update({
      where: {
        id
      },
      data: {
        featured
      }
    })
    revalidatePath('/admin/crime/pending')
  } catch (error) {
    console.error(error)
  }
} export async function updateStolenReportPublishedAction(id: string, published: boolean) {
  await isAdmin()

  try {
    await db.stolenReport.update({
      where: {
        id
      },
      data: {
        published
      }
    })
    revalidatePath('/admin/crime/pending')
  } catch (error) {
    console.error(error)
  }
}
export async function updateStolenReportFoundAction(id: string, found: boolean) {
  await isAdmin()

  try {
    await db.stolenReport.update({
      where: {
        id
      },
      data: {
        found
      }
    })
    revalidatePath('/admin/crime/pending')
  } catch (error) {
    console.error(error)
  }
}
