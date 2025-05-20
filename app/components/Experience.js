import React from 'react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2021 - Present',
    description: [
      'Lead a team of 5 developers to build a SaaS platform serving 10,000+ monthly active users',
      'Architected and implemented a microservices backend using Node.js and Kubernetes',
      'Improved frontend performance by 40% through code splitting and lazy loading',
      'Mentored junior developers and conducted technical interviews for new hires'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Digital Innovations LLC',
    period: 'Mar 2018 - Dec 2020',
    description: [
      'Developed and maintained React-based web applications with Redux state management',
      'Collaborated with UX designers to implement responsive and accessible interfaces',
      'Integrated third-party APIs including Stripe for payments and SendGrid for email',
      'Participated in Agile ceremonies and contributed to sprint planning'
    ]
  },
  {
    role: 'Junior Developer',
    company: 'StartUp Ventures',
    period: 'Jun 2016 - Feb 2018',
    description: [
      'Built RESTful APIs using Express.js and MongoDB for mobile applications',
      'Implemented automated testing with Jest and Cypress',
      'Assisted in migrating legacy jQuery codebase to React',
      'Participated in code reviews and pair programming sessions'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
              <div className="text-gray-600 font-medium">{exp.company}</div>
              <div className="text-blue-600 font-medium">{exp.period}</div>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;