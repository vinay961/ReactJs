import React, { useState } from 'react';
import './New.css';

function New() {
  // State to manage the visibility of each content section
  const [visibleContent, setVisibleContent] = useState({});

  // Function to toggle the visibility of a content section
  const toggleContent = (contentId) => {
    setVisibleContent((prevVisibleContent) => ({
      ...prevVisibleContent,
      [contentId]: !prevVisibleContent[contentId],
    }));
  };

  return (
    <div className="container">
      <h1>About Me</h1>
      
      <div className="skill-section">
        <h2>Skills</h2>
        <div className="skill" onClick={() => toggleContent('skill1')}>Web Development</div>
        {visibleContent['skill1'] && (
          <div className="content">I have experience in HTML, CSS, JavaScript, and various web frameworks.</div>
        )}
        
        <div className="skill" onClick={() => toggleContent('skill2')}>Graphic Design</div>
        {visibleContent['skill2'] && (
          <div className="content">Proficient in Adobe Photoshop, Illustrator, and other design tools.</div>
        )}
      </div>
      
      <div className="experience-section">
        <h2>Experience</h2>
        <div className="experience" onClick={() => toggleContent('exp1')}>Frontend Developer at XYZ Company</div>
        {visibleContent['exp1'] && (
          <div className="content">Worked on developing and maintaining the company's main website.</div>
        )}
        
        <div className="experience" onClick={() => toggleContent('exp2')}>Graphic Designer at ABC Studio</div>
        {visibleContent['exp2'] && (
          <div className="content">Created visual concepts to communicate ideas that inspire and captivate consumers.</div>
        )}
      </div>
    </div>
  );
}

export default New;
