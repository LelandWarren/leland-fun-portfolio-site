import React from 'react';

interface SkillsProps {
  skills: string[];
}

const ResumeSectionSkills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Skills</h2>
      <div className="flex flex-wrap space-x-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default ResumeSectionSkills;
