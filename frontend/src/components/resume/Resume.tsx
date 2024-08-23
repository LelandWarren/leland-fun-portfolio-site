import React from 'react';
import ResumeSectionHeader from './sections/ResumeSectionHeader';
import ResumeSectionSummary from './sections/ResumeSectionSummary';
import ResumeSectionExperience from './sections/ResumeSectionExperience';
import ResumeSectionSkills from './sections/ResumeSectionSkills';
import ResumeSectionEducation from './sections/ResumeSectionEducation';
import ResumeSectionFooter from './sections/ResumeSectionFooter';
import resumeData from './data/resumeData.json'; 

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <ResumeSectionHeader 
        name={resumeData.name} 
        title={resumeData.title} 
        email={resumeData.contact.email} 
      />
      <ResumeSectionSummary summary={resumeData.summary} />
      <ResumeSectionExperience experience={resumeData.experience} />
      <ResumeSectionSkills skills={resumeData.skills} />
      <ResumeSectionEducation 
        degree={resumeData.education.degree} 
        school={resumeData.education.school} 
        period={resumeData.education.period} 
      />
      <ResumeSectionFooter 
        github={resumeData.github} 
        linkedin={resumeData.linkedin} 
        resumeLink={resumeData.resumeLink} 
      />
    </div>
  );
}

export default Resume;
