import React from 'react';

const education = [
  {
    degree: 'Master of Computer Science',
    institution: 'Tech University',
    year: '2016',
    description: 'Specialized in Artificial Intelligence and Machine Learning'
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'State University',
    year: '2014',
    description: 'Minor in Mathematics, GPA: 3.8/4.0'
  }
];

const Education = () => {
  return (
    <section id="education" className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
              <div className="text-gray-600 font-medium">{edu.institution}</div>
              <div className="text-blue-600 font-medium">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;