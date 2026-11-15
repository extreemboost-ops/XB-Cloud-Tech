import CampaignLandingTemplate from "../../components/CampaignLandingTemplate"
import { CAMPAIGNS_DATA } from "../../data/campaigns"

export default function StorexRetailCampaign() {
  const campaign = CAMPAIGNS_DATA["storex-retail"]
  return <CampaignLandingTemplate campaign={campaign} />
}
