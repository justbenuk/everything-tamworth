"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export async function getUserprofileAction() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  try {
    const user = await db.user.findFirst({
      where: {
        email: session?.user.email as string,
      },
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
