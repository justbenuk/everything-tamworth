import Header from "@/components/headers/header";
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
          <div className="mt-6">
            <h1 className="font-medium text-3xl px-4 pb-6">FAQ&apos;s</h1>
            <div className="w-full">
              <Accordion type="single" className="w-full bg-muted px-6 h-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I change my password</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>You can change your password here</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I delete my account</AccordionTrigger>
                  <AccordionContent>Holder</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you store any of my data</AccordionTrigger>
                  <AccordionContent>Holder</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>I have a question</AccordionTrigger>
                  <AccordionContent>Holder</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </PageContainer>
      <footer>footer</footer>
    </div>
  );
}
