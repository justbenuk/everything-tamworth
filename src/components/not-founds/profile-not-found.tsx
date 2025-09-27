import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ProfileNotFound({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-5xl font-semibold">Profile Not Found</h1>
      <p>Reason: {message}</p>
      <p>If problem persists, please contact support</p>
      <Button variant={"default"} size={"lg"} asChild>
        <Link href={"/"}>Go Home</Link>
      </Button>
    </div>
  );
}
