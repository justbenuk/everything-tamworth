import { isLoggedIn } from "@/features/auth/auth-actions";
import { RootProps } from "@/types";
import React from "react";

export default async function AuthTemplate({ children }: RootProps) {
  await isLoggedIn();
  return <>{children}</>;
}
