/// -----------------------------------------------------------------------------
// AboutHero.tsx — headshot and introduction section for the About page.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

import headshotImage from '../../assets/photo.png';
import ResumeDownloadButton from '../ResumeDownloadButton';

export default function AboutHero() {
  return (
    <div className="grid gap-8 items-start grid-cols-1 md:grid-cols-[280px_1fr]">
      <img
        src={headshotImage}
        alt="Portrait of Maria Martina Carballo Diaz"
        width={280}
        height={280}
        className="w-full max-w-[280px] h-auto md:w-[280px] md:h-[280px] object-cover rounded-lg bg-surface-2 border border-border shadow-md"
      />

      <div className="grid gap-3">
        <h2 className="mb-0">Maria Martina Carballo Diaz</h2>

        <p className="text-accent font-medium m-0">
          Software Engineering Technician Student · Web Development
        </p>

        <p className="m-0 leading-relaxed">
          I'm a Software Engineering Technician student at Centennial College with
          hands-on experience in web development, front-end and back-end support,
          and working with tools such as GitHub and Firebase.
        </p>

        <p className="m-0 leading-relaxed">
          Outside of school and development, I enjoy going to the gym, reading, and
          learning about aviation. I like staying active, exploring new interests,
          and challenging myself to keep growing both personally and professionally.
        </p>

        {/* Resume download */}
        <div className="justify-self-start mt-2">
          <ResumeDownloadButton />
        </div>
      </div>
    </div>
  );
}