'use client'

import z from "zod";
import { stolenReportSchema } from "../crime-validators";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import StolenReportImageUploadButton from "@/features/images/stolen-report-uploader";
import { removeImageUploadedByUrl } from "@/features/images/image-actions";
import { createStolenReportAction } from "../crime-actions";
import toast from "react-hot-toast";
import SectionTitle from "@/components/section-title";

export default function StolenReportForm() {



  const form = useForm<z.infer<typeof stolenReportSchema>>({
    resolver: zodResolver(stolenReportSchema),
    defaultValues: {
      email: '',
      make: '',
      model: '',
      registration: '',
      image: '',
      published: false,
      featured: false,
      found: false,
    }
  })

  async function handleRemoveImage() {
    await removeImageUploadedByUrl(form.getValues("image"))
    form.setValue("image", "")
  }

  async function handleForm(values: z.infer<typeof stolenReportSchema>) {
    const { success, message } = await createStolenReportAction(values)

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
      form.reset()
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleForm)} className="grid gap-6">
        <div className="mt-10">
          <SectionTitle title="Personal Information" />
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <p>Please note, We do not share any of your personal information. We will use it to contact you directly if we receive an update that helps you locate your missing items</p>
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-teal-500">Email</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-teal-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <SectionTitle title="Vehicle Details" />
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <p>Please provide as much information as possible, Please describe any Damage, identifying features or last known location</p>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="make"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-teal-500">Make</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-teal-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="model"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-teal-500">Model</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-teal-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="registration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-teal-500">Registration</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-teal-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <SectionTitle title="Vehicle Picture" />
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <p>Please provide an image of the missing item</p>
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Crime Image</FormLabel>
                    <FormControl>
                      {/* Use the field.value to conditionally render the image or uploader */}
                      {field.value ? (
                        <div className="relative w-full h-auto max-h-[300px]">
                          <Image src={field.value} alt="Uploaded Crime Image" className="rounded-md object-cover" width={500} height={500} />
                          <Button onClick={handleRemoveImage} variant="destructive" className="absolute top-2 right-2">
                            Remove
                          </Button>
                        </div>
                      ) : (
                        // Pass the `field.onChange` function to your component
                        <StolenReportImageUploadButton onImageUpload={field.onChange} />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="flex flex-row justify-end">
            <Button type="submit" className="bg-teal-500 text-white">Send Report</Button>
          </div>
        </div>
      </form>
    </Form>
  )
}

