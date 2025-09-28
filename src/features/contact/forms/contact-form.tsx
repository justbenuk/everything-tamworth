'use client'

import { useForm } from "react-hook-form"
import z from "zod"
import { contactFormSchema } from "../contact-validators"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createContactFormASction } from "../contact-actions"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      contactNumber: '',
      subject: '',
      message: ''
    }
  })

  async function handleForm(values: z.infer<typeof contactFormSchema>) {
    const { success, message } = await createContactFormASction(values)

    if (!success) {
      toast.error(message)
    } else {
      form.reset()
      toast.success(message)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleForm)} className="grid gap-6">
        <div className="grid gap-3">
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white dark:bg-muted" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-3">
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white dark:bg-muted" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-3">
          <FormField
            control={form.control}
            name='contactNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Optional" className="bg-white dark:bg-muted" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-3">
          <FormField
            control={form.control}
            name='subject'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white dark:bg-muted" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-3">
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} className="h-36 bg-white dark:bg-muted" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="bg-teal-500 text-white">Send message</Button>
        </div>
      </form>
    </Form>
  )
}

