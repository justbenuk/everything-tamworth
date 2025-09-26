import Header from "@/components/header";
import { LayoutProps } from "@/types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}
