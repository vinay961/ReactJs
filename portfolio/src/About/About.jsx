import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../Navigation/Nav';
import './About.css';

function About() {
  return (
    <>
      <Nav />
      <div className="aboutBody">
        <div className="mainHead">
          <div className="abouthead">
            <h1>ABOUT ME</h1>
          </div>
          <img src="https://th.bing.com/th?id=OIP.ho7hCKNowRHh7u5wu1aMWQHaF9&w=278&h=224&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="Avatar Image" />
          <p>
            Hello! I'm <span>Vinay Rai</span>, a passionate and driven third-year <span>Computer Science Engineering</span> student with a diverse skill set that spans <span>frontend and backend development</span>, <span>ethical hacking</span>, and <span>problem-solving</span>. My journey in the world of technology began with a curiosity for how things work and has evolved into a deep-seated passion for creating and securing innovative solutions.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
