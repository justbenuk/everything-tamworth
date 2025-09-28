'use server'

import z from "zod"
import { contactFormSchema } from "./contact-validators"
import { db } from "@/lib/db"

export async function createContactFormASction(data: z.infer<typeof contactFormSchema>) {
  try {
    const validated = contactFormSchema.parse(data)

    await db.contact.create({
      data: validated
    })

    return { success: true, message: 'Message Sent' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Sending message failed' }
  }
}
