'use client'

import z from "zod";
import { stolenReportSchema } from "../crime-validators";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SimpleEditor from "@/components/simple-editor";
import Image from "next/image";
import StolenReportImageUploadButton from "@/features/images/stolen-report-uploader";
import { removeImageUploadedByUrl } from "@/features/images/image-actions";
import { createStolenReportAction } from "../crime-actions";
import toast from "react-hot-toast";

export default function StolenReportForm() {



  const form = useForm<z.infer<typeof stolenReportSchema>>({
    resolver: zodResolver(stolenReportSchema),
    defaultValues: {
      name: '',
      email: '',
      contactNumber: '',
      item: '',
      itemDescription: '',
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
        <div className="grid sm:grid-cols-2 gap-10 border-b border-dashed py-10">
          <div className="space-y-4">
            <h1 className="text-teal-500 text-xl font-semibold underline underline-offset-8">Personal Information</h1>
            <p className="text-sm text-muted-foreground">Please note, We do not share any of your personal information. We will use ut to contact you directly if we receive an update that helps you locate your missing items</p>
          </div>
          <div className="grid gap-6 bg-muted p-4 lg:p-8 rounded-2xl">
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-teal-500">Name</FormLabel>
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
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-teal-500">Contact Number</FormLabel>
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
        <div className="grid sm:grid-cols-2 gap-10 border-b border-dashed py-10">
          <div className="space-y-4">
            <h1 className="text-teal-500 text-xl font-semibold underline underline-offset-8">Stolen Item</h1>
            <p className="text-sm text-muted-foreground">Please provide as much information as possible, Please describe any Damage, identifying features or last known location</p>
          </div>
          <div className="grid gap-6 bg-muted p-4 lg:p-8 rounded-2xl">
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="item"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-teal-500">Item Stolen</FormLabel>
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
                name="itemDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-teal-500">Item Description</FormLabel>
                    <FormControl>
                      <div className="border-teal-500">
                        <SimpleEditor {...field} />
                      </div>
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
                      <Input {...field} placeholder="Optional" className="border-teal-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 border-b border-dashed py-10">
          <div className="space-y-4">
            <h1 className="text-teal-500 text-xl font-semibold underline underline-offset-8">Image</h1>
            <p className="text-sm text-muted-foreground">Please provide an image of the missing item</p>
          </div>
          <div className="grid gap-6 bg-muted p-4 lg:p-8 rounded-2xl">
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

