import { createUploadthing, type FileRouter } from 'uploadthing/next'

const f = createUploadthing()
export const ourFileRouter = {
  stolenReportImageUploader: f({
    image: {
      maxFileSize: "8MB",
      maxFileCount: 1
    }
  })
    .onUploadComplete(async () => {
      return { uploadedBy: 'Uploaded by Anon' }
    })
} satisfies FileRouter
export type OurFileRouter = typeof ourFileRouter
