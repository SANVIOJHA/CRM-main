import RecentCampaigns from "@/components/latestcampaign/latestCampaign";
import CampaignDispatchTable from "@/components/sendcampaigntable/sendCampaignTable";

const CampaignPage = () => {
  return (
    <div className="container pt-6">
      <section className="mb-6">
        <h2 className="text-xl md:text-3xl mb-2">Recent Campaign Activity</h2>
        <RecentCampaigns />
      </section>

      <section>
        <h2 className="text-xl md:text-3xl mb-2">Initiate New Campaign</h2>
        <CampaignDispatchTable />
      </section>
    </div>
  );
};

export default CampaignPage;
