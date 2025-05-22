import React from 'react';

const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-700 mb-4">
            Passionate software engineer with expertise in developing high-performance web applications. 
            I specialize in JavaScript technologies across the full stack with a focus on creating 
            responsive, accessible, and performant user interfaces.
          </p>
          <p className="text-gray-700 mb-4">
            My approach combines technical excellence with strong collaboration skills, working closely 
            with designers, product managers, and other engineers to deliver exceptional products.
          </p>
          <p className="text-gray-700">
            When I'm not coding, I enjoy contributing to open-source projects, mentoring junior developers, 
            and staying up-to-date with the latest industry trends.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img 
              src="/Profile.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;