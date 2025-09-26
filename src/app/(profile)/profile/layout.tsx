import Header from "@/components/header";
import ProfileNotFound from "@/components/not-founds/profile-not-found";
import { getUserprofileAction } from "@/features/profile/profile-actions";
import { RootProps } from "@/types";
import React from "react";

export default async function ProfileTemplate({ children }: RootProps) {
  const { success, message, user } = await getUserprofileAction();

  if (!success) {
    return ProfileNotFound();
  }
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main>{children}</main>
      <footer>this is the footer</footer>
    </div>
  );
}
