"use client";
import { UploadButton } from "@/lib/uploadthing";
import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge";

interface SeparateUploadImageProps {
  onImageUpload: (url: string) => void;
}

export default function StolenReportImageUploadButton({ onImageUpload }: SeparateUploadImageProps) {
  return (
    <UploadButton
      endpoint="stolenReportImageUploader"
      config={{ cn: twMerge }}
      appearance={{
        button: "border-2 border-dashed border-teal-500 text-teal-500 w-full h-24 cursor-pointer",
      }}
      onClientUploadComplete={async (res) => {
        if (res && res.length > 0) {
          const url = res[0].ufsUrl; // Use `url` instead of `ufsUrl`
          // Call the function passed from the parent with the URL
          onImageUpload(url);
          toast.success('Image Uploaded')
        }
      }}
      onUploadError={(error: Error) => {
        console.error(error);
        toast.error("Image failed to upload");
      }}
    />
  );
}
