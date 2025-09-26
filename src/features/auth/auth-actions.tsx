"use server";
import z from "zod";
import { loginFormSchema, registerFormSchema } from "./auth-validator";
import { db } from "@/lib/db";
import { compareSync, hashSync } from "bcrypt-ts-edge";
import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function registerUserAction(data: z.infer<typeof registerFormSchema>) {
  try {
    const validated = registerFormSchema.parse(data);
    const hashedPassword = hashSync(validated.password, 10);

    await db.user.create({
      data: {
        name: validated.name,
        email: validated.email,
        password: hashedPassword,
        role: "USER",
      },
    });
    return { success: true, message: "User Registered" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to register user" };
  }
}

export async function loginUserAction(data: z.infer<typeof loginFormSchema>) {
  try {
    const validated = loginFormSchema.parse(data);

    const user = await db.user.findUnique({
      where: {
        email: validated.email,
      },
    });

    if (!user) return { success: false, message: "Invalid credentials" };

    const isValid = compareSync(validated.password, user.password);
    if (!isValid) return { success: false, message: "Invalid credentials" };

    const result = await signIn("credentials", {
      redirect: false,
      email: validated.email,
      password: validated.password,
    });
    revalidatePath("/");
    redirect("/profile");
  } catch (error) {
    console.error(error);
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: "Failed to log you in" };
  }
}

export async function isLoggedIn() {
  const session = await auth();
  if (session?.user) return redirect("/profile");
}

export async function logoutUserAction() {
  await signOut();
}
