import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../Navigation/Nav';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './About.css';

function About() {

  const [visibleContent, setVisibleContent] = useState({});

  const toggleContent = (contentId) => {
    setVisibleContent((prevVisibleContent) => ({
      ...prevVisibleContent,
      [contentId]: !prevVisibleContent[contentId],
    }));
  };

  return (
    <>
      <Nav />
      <div className="aboutBody">
        <div className="mainHead">
          <div className="abouthead">
            <h1>ABOUT ME</h1>
          </div>
          <img src="https://img.freepik.com/premium-photo/illustration-cute-boy-avatar-graphic-white-background-created-with-generative-ai-technology_67092-4555.jpg" />
          <p>
            Hello! I'm <span>Vinay Rai</span>, a passionate and driven third-year <span>Computer Science Engineering</span> student with a diverse skill set that spans <span>frontend and backend development</span>, <span>ethical hacking</span>, and <span>problem-solving</span>. My journey in the world of technology began with a curiosity for how things work and has evolved into a deep-seated passion for creating and securing innovative solutions.
          </p>
        </div>
        <div className="skill">
          <div className="skill1">
              <h2>Experience</h2>

              <div className="experience" onClick={() => toggleContent('exp1')}><FontAwesomeIcon className='icon' icon={faCaretDown} />MERN Developer @PW,Remote</div>
              {visibleContent['exp1'] && (
                <div className="contents">During my PW internship, I immersed myself in full stack development, contributing to diverse projects. Notably, I played a key role in developing a Gym website, collaborating with a talented team to ensure user-friendly features and robust functionality.</div>
              )}
              <div className="experience" onClick={() => toggleContent('exp2')}><FontAwesomeIcon className='icon' icon={faCaretDown} />Cyber Security @CDAC,Noida</div>
              {visibleContent['exp2'] && (
                <div className="contents">During my CDAC internship, I gained practical experience in cyber security, including network security, penetration testing, threat analysis, and incident response. This opportunity provided invaluable insights and real-world exposure, enhancing my ability to address evolving cyber security challenges.</div>
              )}
              <div className="experience" onClick={() => toggleContent('exp3')}><FontAwesomeIcon className='icon' icon={faCaretDown} />FrontEnd Developer @Suvidha-foundation</div>
              {visibleContent['exp3'] && (
                <div className="contents">I'm excited to share that I've been offered a Frontend Developer internship at Suvidha Foundation. This opportunity allows me to apply my skills in real-world projects for positive social impact. I look forward to collaborating with the talented team and enhancing my frontend development expertise while contributing to meaningful initiatives.</div>
              )}
              
            </div>
            <div className="skill2">
              <h2>Skills</h2>
                <div className="experience" onClick={() => toggleContent('sk1')}><FontAwesomeIcon className='icon' icon={faCaretDown} />Full Stack Development</div>
                {visibleContent['sk1'] && (
                  <div className="contents">I completed an extensive full stack development course at PW, where I gained hands-on experience in both front-end and back-end technologies. My training covered HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and SQL, equipping me with the skills to build robust and scalable web applications.</div>
                )}
                <div className="experience" onClick={() => toggleContent('sk2')}><FontAwesomeIcon className='icon' icon={faCaretDown} />Cyber Security</div>
                {visibleContent['sk2'] && (
                  <div className="contents">I completed a comprehensive cyber security training program, where I developed expertise in network security, ethical hacking, threat analysis, and vulnerability assessment. My training equipped me with the skills to protect and secure digital assets against evolving cyber threats.</div>
                )}
                <div className="experience" onClick={() => toggleContent('sk3')}><FontAwesomeIcon className='icon' icon={faCaretDown} />System Design</div>
                {visibleContent['sk3'] && (
                  <div className="contents">I completed an system design course, where I learned to architect scalable, reliable, and maintainable systems. My training covered design principles, distributed systems, database management, and cloud architecture, enabling me to build robust solutions for complex problems.</div>
                )}
            </div>
        </div>
      </div>
    </>
  );
}

export default About;
