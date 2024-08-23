import React from 'react';

interface SummaryProps {
  summary: string;
}

const ResumeSectionSummary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Summary</h2>
      <p className="text-gray-600">{summary}</p>
    </section>
  );
}

export default ResumeSectionSummary;
