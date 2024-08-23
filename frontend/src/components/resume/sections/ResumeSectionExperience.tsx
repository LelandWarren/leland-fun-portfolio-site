import React from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Experience</h2>
      <ul className="space-y-4">
        {experience.map((job, index) => (
          <li key={index}>
            <h3 className="text-xl font-semibold text-gray-800">{job.company}</h3>
            <p className="text-gray-600">{job.role}</p>
            <p className="text-gray-600">{job.duration}</p>
            <ul className="list-disc ml-5 text-gray-600">
              {job.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
