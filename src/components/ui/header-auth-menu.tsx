import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import LogoutForm from "@/features/auth/forms/logout-form";
import { auth } from "@/auth";
import { Button } from "./button";

export default async function HeaderAuthMenu() {
  const session = await auth();
  return (
    <>
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src={session.user.image as string} alt="profile image" />
              <AvatarFallback>ET</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={"/profile"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <LogoutForm />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex flex-row gap-4">
          <Button variant={"default"} size={"sm"} asChild>
            <Link href={"/login"}>Login</Link>
          </Button>
          <Button variant={"secondary"} size={"sm"} asChild>
            <Link href={"/register"}>Register</Link>
          </Button>
        </div>
      )}
    </>
  );
}
