import Header from "@/components/header";
import PageContainer from "@/components/page-container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LayoutProps } from "@/types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <PageContainer className="flex-1 mt-4">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-10">
          <div>{children}</div>
          <aside>
            Sidebar
          </aside>
        </div>
      </PageContainer>
      <footer>footer</footer>
    </div>
  );
}
