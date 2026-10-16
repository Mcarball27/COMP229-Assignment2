// -----------------------------------------------------------------------------
// Services.tsx — Services page.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

import serviceProgrammingImage from '../assets/programming.png';
import serviceWebImage from '../assets/web_dev.png';
import serviceDatabaseImage from '../assets/database.png';

type Service = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    image: serviceWebImage,
    imageAlt: 'Illustration of a browser window',
    description:
      'Building responsive and user-friendly websites using HTML, CSS, JavaScript, and React.'
  },
  {
    id: 'programming',
    title: 'Programming',
    image: serviceProgrammingImage,
    imageAlt: 'Illustration of code brackets',
    description:
      'Developing small applications and software projects using languages such as C#, Python, JavaScript, and Java.'
  },
  {
    id: 'database-support',
    title: 'Database & Technical Support',
    image: serviceDatabaseImage,
    imageAlt: 'Illustration representing technical and database support',
    description:
      'Working with SQL, Oracle databases, Firebase, Git, and troubleshooting technical issues in development projects.'
  }
];

export default function Services() {
  return (
    <section>
      <h1 className="section-title">Services</h1>

      <p className="lead">
        Areas where I can apply my current skills and continue building hands-on experience.
      </p>

      {/* Service cards */}
      <div className="grid gap-5 mt-6 grid-cols-1 md:grid-cols-3">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className="card flex flex-col items-center text-center gap-1"
          >
            <img
              className="w-24 h-24 my-2"
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
            />

            <h3 className="mb-1">
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
