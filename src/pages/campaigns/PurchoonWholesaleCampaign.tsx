import CampaignLandingTemplate from "../../components/CampaignLandingTemplate"
import { CAMPAIGNS_DATA } from "../../data/campaigns"

export default function PurchoonWholesaleCampaign() {
  const campaign = CAMPAIGNS_DATA["purchoon-wholesale"]
  return <CampaignLandingTemplate campaign={campaign} />
}
