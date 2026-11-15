import CampaignLandingTemplate from "../../components/CampaignLandingTemplate"
import { CAMPAIGNS_DATA } from "../../data/campaigns"

export default function IndustrialCampaign() {
  const campaign = CAMPAIGNS_DATA["industrial-erp"]
  return <CampaignLandingTemplate campaign={campaign} />
}
