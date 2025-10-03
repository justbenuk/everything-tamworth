import Header from "@/components/headers/header";
import PageContainer from "@/components/page-container";
import CrimeSidebar from "@/features/crime/components/sidebar/crime-sidebar";
import { LayoutProps } from "@/types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <PageContainer className="flex-1 mt-8">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-10">
          <div>{children}</div>
          <CrimeSidebar />
        </div>
      </PageContainer>
      <footer>footer</footer>
    </div>
  );
}
