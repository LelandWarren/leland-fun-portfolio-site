import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
  email: string;
}

const ResumeSectionHeader: React.FC<HeaderProps> = ({ name, title, email }) => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{name}</h1>
      <p className="text-xl text-gray-600">{title}</p>
      <div className="mt-4">
        <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
      </div>
    </header>
  );
}

export default ResumeSectionHeader;
