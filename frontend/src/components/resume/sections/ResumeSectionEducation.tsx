import React from 'react';

interface EducationProps {
  degree: string;
  school: string;
  period: string;
}

const ResumeSectionEducation: React.FC<EducationProps> = ({ degree, school, period }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education</h2>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{degree}</h3>
        <p className="text-gray-600">{school}</p>
        <p className="text-gray-600">{period}</p>
      </div>
    </section>
  );
}

export default ResumeSectionEducation;
