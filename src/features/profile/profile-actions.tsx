"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

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
