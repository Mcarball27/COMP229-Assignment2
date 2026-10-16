// -----------------------------------------------------------------------------
// Education.tsx — Education page.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

type Qualification = {
  id: string;
  qualification: string;
  institution: string;
  dates: string;
  detail: string;
};

const QUALIFICATIONS: Qualification[] = [
  {
    id: 'centennial',
    qualification: 'Software Engineering Technician Diploma — In Progress',
    institution: 'Centennial College — Toronto, ON',
    dates: '2025 – Present',
    detail:
      'Studying software development, object-oriented programming, web application development, database design, and software testing.'
  },
  {
    id: 'pilot-training',
    qualification: 'Private Pilot Training',
    institution: 'IICA — Aeronautical Training Institute',
    dates: 'Mar 2024 – Aug 2024',
    detail:
      'Completed private pilot training covering aviation theory and practical flight training.'
  },
  {
    id: 'high-school',
    qualification: 'High School Diploma',
    institution: 'Bear Creek Secondary School — Barrie, ON',
    dates: '2019 – 2022',
    detail:
      'Completed Ontario secondary school education.'
  }
];

export default function Education() {
  return (
    <section>
      <h1 className="section-title">Education</h1>

      <p className="lead">
        My education, training, and professional qualifications.
      </p>

      {/* Education and training timeline */}
      <ol className="list-none p-0 mt-6 grid gap-4">
        {QUALIFICATIONS.map((item) => (
          <li
            key={item.id}
            className="card grid gap-5 items-start grid-cols-1 sm:grid-cols-[160px_1fr]"
          >
            <div className="font-bold text-accent text-[1.05rem]">
              {item.dates}
            </div>

            <div>
              <h3 className="mb-1">
                {item.qualification}
              </h3>

              <p className="text-text mb-1">
                {item.institution}
              </p>

              <p className="mb-0">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}