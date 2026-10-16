// // -----------------------------------------------------------------------------
// About.tsx — About Me page.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

import AboutHero from '../components/about/AboutHero';
import SkillsList, {
  DEFAULT_SKILLS,
  COOL_SKILLS
} from '../components/about/SkillsList';
import TechStack from '../components/about/TechStack';

export default function About() {
  return (
    <section className="space-y-2">
      <h1 className="section-title">About Me</h1>

      <AboutHero />

      {/* Current skills */}
      <SkillsList
        title="Skills I bring to a team"
        skills={DEFAULT_SKILLS}
      />

      {/* Skills I want to develop */}
      <SkillsList
        title="Skills I want to learn"
        skills={COOL_SKILLS}
      />

      {/* Technologies and development tools */}
      <TechStack title="Technologies & Tools" />
    </section>
  );
}