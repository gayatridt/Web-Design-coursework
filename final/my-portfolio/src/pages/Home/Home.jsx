// src/pages/Home/Home.jsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: "🎓",
      title: "Student Ambassador",
      description: "Representing Northeastern University - Silicon Valley, I work closely with students and staff to foster a welcoming, inclusive environment. From organizing workshops to hosting cultural events, I strive to build meaningful connections within the university community."
    },
    {
      icon: "👥",
      title: "Adobe Ambassador",
      description: "As an Adobe Student Ambassador, I promote innovative creative solutions by encouraging students to explore cutting-edge tools and technologies, fostering their creative potential in design and technology."
    },
    {
      icon: "🎨",
      title: "Co-founder, Artful Huskies",
      description: "Co-founded Artful Huskies, a dynamic art club at Northeastern University, to encourage self-expression and creativity. We explore diverse artistic mediums and host engaging workshops and events that bring the community together."
    },
    {
      icon: "📱",
      title: "Marketing Lead, Google Developers Group NEU-SV",
      description: "Led marketing and social media initiatives for Google Developers Group NEU-SV, effectively driving engagement and participation in developer-focused events through strategic communication and content creation."
    },
    {
      icon: "💻",
      title: "Software Development",
      description: "Extensive experience in full-stack development, cloud technologies, and optimizing workflows to deliver robust software solutions across a wide variety of projects and domains."
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "C#"],
    "Frameworks & Libraries": ["React", "JavaFX", "Material-UI"],
    "Cloud Platforms": ["AWS", "Azure DevOps"],
    "Development Tools": ["Docker", "Terraform", "Power Platform"]
  };

  const projects = [
    {
      title: "nuGPT Chatbot",
      description: "Developed a highly responsive chatbot tailored to the Northeastern University Silicon Valley community. Leveraged React, Docker, and Meta Llama3 to deliver accurate academic, career, and course-related information through an interactive interface.",
      tech: ["React", "Docker", "Meta Llama3"]
    },
    {
      title: "Diabetes Prediction",
      description: "Engineered a machine learning model to predict diabetes using Python, scikit-learn, and Pandas. This project showcases my proficiency in data science and my ability to translate complex data into actionable insights.",
      tech: ["Python", "scikit-learn", "Pandas"]
    }
  ];

  return (
    <motion.main 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="main"
    >
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <motion.div 
            className="hero__left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 id="hero-title">Hi, I'm Gayatri Dubey <span aria-hidden="true">👋</span></h1>
            <div className="typewriter" aria-label="Role description">
              <h2>Software Engineer | Creative Problem Solver | Tech Enthusiast</h2>
            </div>
            <p>
            Welcome to my portfolio! I am a passionate software engineer with a commitment to crafting innovative, scalable, and user-centric solutions. With a strong foundation in programming and a keen eye for design, I thrive at the intersection of technology and creativity. Currently pursuing a Master's in Information Systems at Northeastern University, I am on a journey to leverage my skills in developing impactful digital experiences while staying ahead of technological trends.
            </p>
            <div className="hero__cta" role="group" aria-label="Call to action buttons">
              <button className="btn btn-primary" onClick={() => navigate('/portfolio')}>
                View My Work
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/files/Gayatri-Dubey-Resume.pdf'; 
                  link.download = 'Gayatri-Dubey-Resume.pdf';
                  link.click();
                }}
                aria-label="Download resume"
              >
                <FaDownload /> Download Resume
              </button>
            </div>
          </motion.div>
          <motion.div 
            className="hero__right"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src="/images/professional-photo.jpg" alt="Gayatri Dubey" className="hero__image" />
          </motion.div>
        </div>
      </section>

      <section className="about" aria-labelledby="about-title">
        <h2 id="about-title"><span aria-hidden="true">👩‍💻</span> About Me</h2>
        <div className="about__content">
          <p>I am a detail-driven software engineer with expertise in backend development, programming, and machine learning. My academic journey in Information Systems at Northeastern University has enabled me to deepen my knowledge of data science, cloud computing, and application development. With a passion for solving complex problems and creating seamless digital experiences, I am always eager to take on new challenges that push boundaries.</p>
          <p>Beyond the code, I am an artist at heart. My creative side comes alive through painting, resin art, and traditional crafts. As a co-founder of Artful Huskies, a thriving art community on campus, I have combined leadership with creativity to foster a vibrant artistic environment. Additionally, my role as a Student Ambassador allows me to give back to my university community by organizing events and co-curricular programs that promote inclusivity and collaboration.</p>
        </div>
      </section>

      <section className="highlights" aria-labelledby="highlights-title">
        <h2 id="highlights-title"><span aria-hidden="true">🌟</span> Highlights</h2>
        <div className="highlights__grid" role="list">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="highlight__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              role="listitem"
            >
              <span className="highlight__icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="skills" aria-labelledby="skills-title">
        <h2 id="skills-title"><span aria-hidden="true">🛠️</span> Technical Skills</h2>
        <div className="skills__grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skills__category" role="region" aria-label={`${category} skills`}>
              <h3>{category}</h3>
              <div className="skills__list" role="list">
                {skillList.map((skill, index) => (
                  <span key={index} className="skill__tag" role="listitem">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="projects" aria-labelledby="projects-title">
        <h2 id="projects-title"><span aria-hidden="true">💻</span> Featured Projects</h2>
        <div className="projects__grid" role="list">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project__card"
              whileHover={{ y: -10 }}
              role="listitem"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project__tech" role="list" aria-label="Technologies used">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech__tag" role="listitem">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/portfolio')}>
          View All Projects
        </button>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <h2 id="contact-title"><span aria-hidden="true">📬</span> Let's Connect!</h2>
        <p>I’m always excited to connect with like-minded professionals, collaborate on innovative projects, or explore new opportunities. Whether you’d like to discuss an idea, offer an internship, or simply have a conversation, feel free to reach out.</p>
        <div className="contact__links" role="list">
          <a 
            href="mailto:dubey.g@northeastern.com" 
            className="contact__link"
            aria-label="Send email"
          >
            <FaEnvelope aria-hidden="true" /> Email
          </a>
          <a 
            href="https://www.linkedin.com/in/gayatri-dubey/" 
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile (opens in new tab)"
          >
            <FaLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a 
            href="https://github.com/gayatridt" 
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile (opens in new tab)"
          >
            <FaGithub aria-hidden="true" /> GitHub
          </a>
        </div>
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/contact')}
          aria-label="Go to contact page"
        >
          Send Message
        </button>
      </section>
    </motion.main>
  );
}

export default Home;