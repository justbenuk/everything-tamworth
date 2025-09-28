import { auth } from "@/auth";
import ProfileNotFound from "@/components/not-founds/profile-not-found";
import { Separator } from "@/components/ui/separator";
import UpdateProfileDetailsForm from "@/features/profile/forms/update-profile-details-form";
import { getUserProfileAction } from "@/features/profile/profile-actions";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProfilePage() {
  const session = await auth()
  if (!session) redirect('/login')

  const { success, message, user } = await getUserProfileAction()

  if (!success || !user) return <ProfileNotFound message={message} />

  return <div className="mt-4">
    <h1 className="text-3xl font-medium">Profile</h1>
    <span className="text-muted-foreground text-sm">Change your profile details</span>

    <div className="grid lg:grid-cols-2 gap-4 mt-6">
      <div className="h-56 flex flex-col lg:flex-row">
        <div className="flex-1">
          <UpdateProfileDetailsForm user={user} />
        </div>
        <Separator orientation="vertical" className="hidden lg:block" />
        <Separator orientation="horizontal" className="lg:hidden" />
      </div>
      <div>
        <h1 className="font-medium text-sm pb-2">Profile Picture</h1>
        <div className="w-full border-2 border-dashed h-24 rounded-3xl"></div>
      </div>
    </div>
  </div>
}
