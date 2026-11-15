import CampaignLandingTemplate from "../../components/CampaignLandingTemplate"
import { CAMPAIGNS_DATA } from "../../data/campaigns"

export default function PharmacyCampaign() {
  const campaign = CAMPAIGNS_DATA["pharmacy-management"]
  return <CampaignLandingTemplate campaign={campaign} />
}
