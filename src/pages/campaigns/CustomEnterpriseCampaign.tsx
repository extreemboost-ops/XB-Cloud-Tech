import CampaignLandingTemplate from "../../components/CampaignLandingTemplate"
import { CAMPAIGNS_DATA } from "../../data/campaigns"

export default function CustomEnterpriseCampaign() {
  const campaign = CAMPAIGNS_DATA["custom-enterprise-software"]
  return <CampaignLandingTemplate campaign={campaign} />
}
