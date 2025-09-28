"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { updateProfileSchema } from "./update-profile-schema";
import z from "zod";
import { revalidatePath } from "next/cache";

export async function getUserProfileAction() {
  const session = await auth()

  try {
    const user = await db.user.findFirst({
      where: {
        email: session?.user.email as string,
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true
      }
    });

    if (!user) {
      return { success: false, message: "No User Found" };
    }

    return { success: true, user };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Unable to find user" };
  }
}

export async function updateProfileDetailsAction(data: z.infer<typeof updateProfileSchema>) {
  const session = await auth()
  if (!session) return { success: false, message: 'You must be logged in' }

  const user = await db.user.findFirst({
    where: {
      id: session.user.id
    }
  })


  try {
    const validated = updateProfileSchema.parse(data)

    revalidatePath('/')
    return { success: true, message: 'Profile Updated' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to update profile' }
  }
}

