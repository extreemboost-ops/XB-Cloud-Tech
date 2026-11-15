import CampaignLandingTemplate from "../../components/CampaignLandingTemplate"
import { CAMPAIGNS_DATA } from "../../data/campaigns"

export default function CambridgeDeskCampaign() {
  const campaign = CAMPAIGNS_DATA["cambridgedesk-schools"]
  return <CampaignLandingTemplate campaign={campaign} />
}
