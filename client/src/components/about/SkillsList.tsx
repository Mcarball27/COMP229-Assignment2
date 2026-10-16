// -----------------------------------------------------------------------------
// SkillsList.tsx — reusable skills list for the About page.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

import { useState } from 'react';
import './SkillsList.css';

type SkillsListProps = {
  title: string;
  skills: readonly string[];
};

export const DEFAULT_SKILLS: readonly string[] = [
  'Problem solving — breaking down technical problems and finding practical solutions',
  'Front-end development — building and updating user-facing web interfaces',
  'Programming — working with languages such as C#, JavaScript, Python, and Java',
  'Databases — working with SQL and Oracle database concepts',
  'Version control — using Git and GitHub for project collaboration',
  'Teamwork — contributing to shared projects, feedback, and assigned tasks'
];

export const COOL_SKILLS: readonly string[] = [
  'React and TypeScript',
  'Cloud deployment and hosting',
  'API development and integration',
  'Advanced database development',
  'Mobile application development'
];

export default function SkillsList({ title, skills }: SkillsListProps) {
  const [showSkills, setShowSkills] = useState(true);

  function handleToggleSkills() {
    setShowSkills((currentlyVisible) => !currentlyVisible);
  }

  return (
    <section className="mt-8 skills-list">
      <h2 className="m-0 mb-3 text-xl">{title}</h2>

      <button
        className="skills-list-toggle"
        type="button"
        onClick={handleToggleSkills}
        aria-expanded={showSkills}
      >
        {showSkills ? 'Hide skills' : 'Show skills'}
      </button>

      {/* Skills list */}
      {showSkills && (
        <ul className="list-disc pl-5 m-0 grid gap-1.5 text-text leading-relaxed">
          {skills.map((skill) => (
            <li key={skill} className="pl-1">
              {skill}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}