import type { Metadata } from "next";
import "./globals.css";
import { RootProps } from "@/types";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    template: "%s | Everything Tamworth",
    default: "Everything Tamworth",
  },
  description: "Community is Everything, A we hope to bring the community of Tamworth together with this resource",
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>{children}</main>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
