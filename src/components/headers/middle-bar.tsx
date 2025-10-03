import PageContainer from "../page-container";
import SiteTitle from "../site-title";

export default function Middlebar() {
  return (
    <div className="py-10">
      <PageContainer>
        <div className="flex flex-row items-center justify-center">
          <SiteTitle />
        </div>
      </PageContainer>
    </div>
  )
}

