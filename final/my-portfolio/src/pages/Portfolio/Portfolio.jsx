// Portfolio.jsx
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Portfolio.css';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('work');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const workExperience = [
    {
      company: "PricewaterhouseCoopers (PwC)",
      role: "Senior Associate (Senior Developer)",
      period: "Jul 2022 - Jul 2023",
      location: "Bangalore, India",
      achievements: [
        "Spearheaded the design and development of dynamic forms and workflows using Microsoft Power Platform, seamlessly integrating data from Dataverse and SharePoint to enhance operational efficiency.",
        "Conducted detailed project capability breakdowns that led to an 8% growth in business opportunities by identifying and addressing critical pain points for clients.",
        "Played a pivotal role in mentoring junior developers, fostering a collaborative and learning-focused team environment while leading end-to-end technical implementations for complex projects."
      ]
    },
    {
      company: "Tata Consultancy Services (TCS)",
      role: "IT Analyst (Senior Development Engineer)",
      period: "Jul 2020 - Jun 2022",
      location: "Pune, India",
      achievements: [
        "Engineered advanced workflows using C# .NET and Kofax, significantly reducing manual processes by 50% and enhancing organizational productivity.",
        "Successfully transitioned legacy systems from C to WPF, modernizing the user interface and improving system maintainability.",
        "Administered Agile methodologies and DevOps practices, ensuring seamless collaboration and delivery of high-quality solutions under tight deadlines."
      ]
    },
    {
      company: "Beyondkey Systems",
      role: "Senior Software Engineer",
      period: "Oct 2014 - Apr 2020",
      location: "Indore, India",
      achievements: [
        "Streamlined the development of modular applications using C# .NET and JavaScript, resulting in a 40% boost in website performance and usability.",
        "Delivered impactful, client-focused software solutions tailored to business needs, enhancing customer satisfaction and retention.",
        "Played a key role in cross-functional teams to deliver innovative software, exceeding client expectations and earning commendations for quality and efficiency."
      ]
    }
  ];

  const projects = [
    {
      title: "nuGPT - Chatbot",
      period: "May 2024 - Aug 2024",
      description: "Developed a fully responsive, intelligent chatbot interface for the Northeastern University community. Built with React and Material-UI, featuring natural language processing via Meta Llama3, data indexing with LlamaIndex, and efficient information retrieval using Chroma. Implemented with Docker for scalable deployment and optimal performance.",
      tech: ["React", "Material-UI", "Meta Llama3", "Docker"],
      category: "Web Development",
      image: "/images/nugptlogo.png"
    },
    {
      title: "Diabetes Prediction Model",
      period: "Jan 2024 - Apr 2024",
      description: "Built a machine learning model for diabetes risk prediction using Python and scikit-learn. Features an interactive Streamlit interface for real-time predictions and analysis of patient health metrics, delivering actionable insights for early diagnosis and intervention.",
      tech: ["Python", "scikit-learn", "Streamlit"],
      category: "Machine Learning",
      image: "/images/diabetesproj.png"
    },
    {
      title: "Image Processing Application",
      period: "Jan 2024 - Apr 2024",
      description: "Developed a Java-based desktop application for real-time image processing, featuring live filter previews, color adjustments, and custom transformations. Built with JavaFX for an intuitive user interface, optimized for photographers and designers with efficient algorithms and memory management.",
      tech: ["Java", "JavaFX"],
      category: "Desktop Application",
      image: "/images/imageproj.png"
    }
  ];

  const categories = ['all', 'Web Development', 'Machine Learning', 'Desktop Application'];
  
  const filteredProjects = [...new Set(projects)]
  .filter(project => filter === 'all' ? true : project.category === filter)
  .sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.period.split(' - ')[0]) - new Date(a.period.split(' - ')[0]);
    }
    return a.title.localeCompare(b.title);
  });

  const sliderSettings = {
    dots: true,
    infinite: filter == 'all',
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="experience" role="main">
      <div className="experience__tabs" role="tablist" aria-label="Portfolio sections">
        <button 
          className={`tab ${activeTab === 'work' ? 'active' : ''}`}
          onClick={() => setActiveTab('work')}
          role="tab"
          aria-selected={activeTab === 'work'}
          aria-controls="work-content"
          id="work-tab"
        >
          Work Experience
        </button>
        <button 
          className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
          role="tab"
          aria-selected={activeTab === 'projects'}
          aria-controls="projects-content"
          id="projects-tab"
        >
          Projects
        </button>
      </div>

      <div className="experience__content">
        {activeTab === 'work' ? (
          <div 
            id="work-content"
            className="timeline"
            role="tabpanel"
            aria-labelledby="work-tab"
          >
            {workExperience.map((exp, index) => (
              <div 
                key={index} 
                className="timeline-item"
                role="article"
                aria-label={`${exp.role} at ${exp.company}`}
              >
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <h3 id={`company-${index}`}>{exp.company}</h3>
                  <h4 id={`role-${index}`}>{exp.role}</h4>
                  <p className="period" aria-label={`Duration: ${exp.period} in ${exp.location}`}>
                    {exp.period} | {exp.location}
                  </p>
                  <ul aria-label="Achievements">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="projects-filters" role="group" aria-label="Project filters">
              <div className="filter-group">
                <label htmlFor="category-filter">Filter by Category:</label>
                <select
                  id="category-filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  aria-label="Filter projects by category"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="sort-by">Sort by:</label>
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort projects"
                >
                  <option value="date">Latest First</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>

            <div 
              id="projects-content"
              className="projects-carousel"
              role="tabpanel"
              aria-labelledby="projects-tab"
            >
              <Slider {...sliderSettings}>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <div 
                      key={project.title} 
                      className="project-slide"
                      role="article"
                      aria-label={project.title}
                    >
                      <div className="project-card">
                        <div className="project-image">
                          <img 
                            src={project.image || '/images/project-placeholder.jpg'} 
                            alt={`${project.title} project screenshot`}
                            loading="lazy"
                          />
                        </div>
                        <div className="project-content">
                          <h3>{project.title}</h3>
                          <p className="period">{project.period}</p>
                          <p>{project.description}</p>
                          <div className="tech-tags">
                            {project.tech.map((tech) => (
                              <span key={`${project.title}-${tech}`} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-projects">
                    No projects found for selected category
                  </div>
                )}
              </Slider>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Portfolio;