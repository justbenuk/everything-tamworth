import React from "react";
import PageContainer from "../page-container";
import Header from "../header";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ProfileNotFound() {
  return (
    <div className="flex flex-col justify-between px-6 2xl:px-0 min-h-screen">
      <Header />
      <PageContainer>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-5xl font-semibold">Profile Not Found</h1>
          <p>We were unable to load your profile. Please email support if this problem persists</p>
          <Button variant={"default"} size={"lg"} asChild>
            <Link href={"/"}>Go Home</Link>
          </Button>
        </div>
      </PageContainer>
      <footer>footer</footer>
    </div>
  );
}
