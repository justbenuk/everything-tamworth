import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  return <div>Profile Page</div>;
}
