import { Button } from "@/components/ui/button";
import React from "react";
import { logoutUserAction } from "../auth-actions";

export default function LogoutForm() {
  return (
    <form action={logoutUserAction} id="logout">
      <button form="logout">Logout</button>
    </form>
  );
}
