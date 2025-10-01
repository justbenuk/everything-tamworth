import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AdminTemplate({ children }: { children: ReactNode }) {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  if (session.user.role !== "ADMIN") {
    redirect('/not-authorised')
  }
  return (
    <>{children}</>
  )
}

