import CambridgeHero from "./cambridgedesk/CambridgeHero"
import CambridgeAcademicShowcase from "./cambridgedesk/CambridgeAcademicShowcase"
import CambridgeCurriculumEngine from "./cambridgedesk/CambridgeCurriculumEngine"
import CambridgeExamExperience from "./cambridgedesk/CambridgeExamExperience"
import CambridgeOperationsShowcase from "./cambridgedesk/CambridgeOperationsShowcase"
import CambridgeRoleDashboards from "./cambridgedesk/CambridgeRoleDashboards"
import CambridgeAcademicJourney from "./cambridgedesk/CambridgeAcademicJourney"
import CambridgeInterfaceGallery from "./cambridgedesk/CambridgeInterfaceGallery"
import CambridgeUseCases from "./cambridgedesk/CambridgeUseCases"
import CambridgeBusinessValue from "./cambridgedesk/CambridgeBusinessValue"
import CambridgeFaqSection from "./cambridgedesk/CambridgeFaqSection"
import CambridgeDemoSection from "./cambridgedesk/CambridgeDemoSection"

export default function CambridgeDeskPage() {
  return (
    <div className="min-h-screen bg-white text-[#0A0F1E] selection:bg-[#0B5FFF]/15 selection:text-[#0B5FFF]">
      {/* 1. Premium Hero Section with Animated EdTech Dashboard */}
      <CambridgeHero />

      {/* 2. Academic Intelligence Showcase (9-Stage Connected Visualization) */}
      <CambridgeAcademicShowcase />

      {/* 3. Curriculum Management Engine (Interactive Learning Objectives Hierarchy) */}
      <CambridgeCurriculumEngine />

      {/* 4. Examination & Assessment Experience (Grading Rules & Marksheet Simulation) */}
      <CambridgeExamExperience />

      {/* 5. Complete School Operations Showcase (9 Core Campus Modules) */}
      <CambridgeOperationsShowcase />

      {/* 6. Role-Based Dashboard Experience (7 Institutional Personas) */}
      <CambridgeRoleDashboards />

      {/* 7. Interactive Academic Journey (5 Pacing Milestones) */}
      <CambridgeAcademicJourney />

      {/* 8. Product Interface Gallery with Frame & Zoom Modal */}
      <CambridgeInterfaceGallery />

      {/* 9. School Types & Use Cases */}
      <CambridgeUseCases />

      {/* 10. Business Value & Operational Shifts */}
      <CambridgeBusinessValue />

      {/* 11. Frequently Asked Questions Accordion */}
      <CambridgeFaqSection />

      {/* 12. Demo Conversion Experience with Verified Dispatch */}
      <CambridgeDemoSection />
    </div>
  )
}
