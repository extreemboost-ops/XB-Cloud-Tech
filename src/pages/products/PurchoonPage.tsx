import PurchoonHero from "./purchoon/PurchoonHero"
import PurchoonWeightCalculator from "./purchoon/PurchoonWeightCalculator"
import PurchoonFeatureShowcase from "./purchoon/PurchoonFeatureShowcase"
import PurchoonWorkflowJourney from "./purchoon/PurchoonWorkflowJourney"
import PurchoonBenefits from "./purchoon/PurchoonBenefits"
import PurchoonInterfaceGallery from "./purchoon/PurchoonInterfaceGallery"
import PurchoonComparison from "./purchoon/PurchoonComparison"
import PurchoonTechSpecs from "./purchoon/PurchoonTechSpecs"
import PurchoonDemoSection from "./purchoon/PurchoonDemoSection"

export default function PurchoonPage() {
  return (
    <div className="min-h-screen bg-white text-[#0A0F1E] selection:bg-[#0B5FFF]/15 selection:text-[#0B5FFF]">
      {/* 1. High-Impact Hero with Animated Dashboard Composition */}
      <PurchoonHero />

      {/* 2. Interactive Feature: Weight-Based POS Demonstration */}
      <PurchoonWeightCalculator />

      {/* 3. Product Feature Showcase — Interactive Storytelling */}
      <PurchoonFeatureShowcase />

      {/* 4. Gamified Product Journey: From Incoming Stock to Successful Sale */}
      <PurchoonWorkflowJourney />

      {/* 5. Product Benefits: More Control. Fewer Manual Calculations. */}
      <PurchoonBenefits />

      {/* 6. Product Interface Gallery with Frame & Zoom Lightbox */}
      <PurchoonInterfaceGallery />

      {/* 7. Comparison / Positioning Section */}
      <PurchoonComparison />

      {/* 8. Technical Architecture & Verified FAQs */}
      <PurchoonTechSpecs />

      {/* 9. Demo Conversion Section with Validated Lead Dispatch */}
      <PurchoonDemoSection />
    </div>
  )
}
