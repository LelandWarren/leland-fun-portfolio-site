import React from 'react';

interface FooterProps {
  github: string;
  linkedin: string;
  resumeLink: string;
}

const ResumeSectionFooter: React.FC<FooterProps> = ({ github, linkedin, resumeLink }) => {
  return (
    <footer className="text-center mt-8">
      <p className="text-gray-600">Find me on:</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href={github} className="text-blue-600 hover:underline">GitHub</a>
        <a href={linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
      </div>
      <div className="mt-4">
        <a href={resumeLink} download className="text-blue-600 underline">Download PDF</a>
      </div>
    </footer>
  );
}

export default ResumeSectionFooter;
