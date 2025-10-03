import PageContainer from "@/components/page-container";
import SectionTitle from "@/components/section-title";
import StolenReportForm from "@/features/crime/forms/stolen-report-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Report A Stolen Vehicle',
  description: 'Let the community keep an eye out for your stolen vehicle. With our searchable database, Your stolen vehicle will always be on show'
}

export default function ReportItem() {
  return (
    <PageContainer>
      <div>
        <SectionTitle title="Report your stolen item" />
        <p> Have you had something stolen? Report it to us. Not only can members of the community search our records easily, we will keep your items on the lost and stolen page until you let us know its been returned</p>
      </div>
      <StolenReportForm />
    </PageContainer>
  )
}

