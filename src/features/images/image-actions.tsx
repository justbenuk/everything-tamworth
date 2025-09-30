'use server'
import { UTApi } from 'uploadthing/server'

export async function removeImageUploadedByUrl(imageUrl: string) {
  if (!imageUrl) return null
  try {
    const utapi = new UTApi()
    const imageKey = imageUrl.substring(imageUrl.lastIndexOf("/") + 1)
    await utapi.deleteFiles(imageKey)
  } catch (error) {
    console.error(error)
  }
}
