import PageContainer from "@/components/page-container";
import PageTitle from "@/components/page-title";
import StolenReportForm from "@/features/crime/forms/stolen-report-form";

export default function ReportItem() {
  return (
    <PageContainer>
      <PageTitle title="Report your stolen item" description="Have you had something stolen? Report it to us. Not only can members of the community search our records easily, we will keep your items on the lost and stolen page until you let us know its been returned" />
      <StolenReportForm />
    </PageContainer>
  )
}

