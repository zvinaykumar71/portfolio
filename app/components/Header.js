import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Name</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Senior Software Engineer</h2>
        <p className="text-xl max-w-3xl mx-auto">
          Full-stack developer specializing in React, Node.js, and cloud technologies with 5+ years of experience building scalable web applications.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#contact" className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Contact Me
          </a>
          <a href="/resume.pdf" className="border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-blue-600 transition">
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;