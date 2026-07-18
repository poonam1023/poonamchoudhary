import { MobileGate } from "@/src/shared/hooks/MobileGate";
import DesktopExperience from "@/src/experience/desktop/DesktopExperience";
import MobileExperience from "@/src/experience/mobile/MobileExperience";

/**
 * Root page — delegates rendering to the correct experience based on viewport.
 *
 *   ≥ 1024px  →  <DesktopExperience /> (the existing luxury book)
 *   < 1024px  →  <MobileExperience />  (the new reading-app)
 *
 * No layout logic is shared between the two experiences.
 */
export default function Home() {
  return (
    <MobileGate
      desktop={
        <main className="w-screen h-screen overflow-hidden">
          <DesktopExperience />
        </main>
      }
      mobile={<MobileExperience />}
    />
  );
}
