import { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal.jsx';
import './About.css';

function About() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gallerySettings, setGallerySettings] = useState({
    layout: 'grid',
    defaultCategory: 'all',
    imageSize: 'medium',
    animation: true
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skillCategories = {
    "Technical": ["Python", "JavaScript", "Java", "C#", "ASP.NET", "React", "CSS", "HTML", "WPF", "Material-UI"],
    "Data Science": ["Python", "scikit-learn", "Streamlit", "Pandas", "NumPy"],
    "Database & Cloud": ["SQL", "Dataverse", "SharePoint", "AWS"],
    "Tools & Methods": ["Agile", "Jira", "GitHub", "CI/CD", "Azure DevOps", "GitLab", "Confluence"]
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  
  const artworks = {
    "Traditional": {
      title: "Hand-Painted Diyas",
      description: "Delicate and intricately designed, these hand-painted diyas are more than just decorative items—they are a celebration of tradition and cultural heritage. Each diya is adorned with vibrant colors, fine patterns, and meaningful motifs, reflecting the essence of festive joy and artistic craftsmanship. These diyas embody the timeless beauty of Indian traditions, making them perfect for illuminating spaces with both light and culture.",
      image: "/images/diyas.jpg",
      type: "traditional"
    },
    "Resin": {
      title: "Ocean Wave Clock",
      description: "Inspired by the serene and dynamic beauty of the ocean, this resin art clock captures the hypnotic movement of waves in vibrant hues of blue and white. The glossy resin finish enhances the depth and texture of the design, while golden Roman numerals add a touch of elegance. This functional yet artistic timepiece transforms any space into a calm, seaside escape, blending utility with aesthetic brilliance.",
      image: "/images/clock.jpg",
      type: "resin"
    },
    "Canvas": {
      title: "Mini Landscape Series",
      description: "A charming collection of miniature landscapes, each piece portrays a unique mood and moment in nature. From sunrises over rolling hills to twilight skies casting shadows over serene lakes, these small-scale masterpieces tell vivid stories through intricate brushstrokes and thoughtful color palettes. Each painting invites viewers to immerse themselves in the tranquility and diversity of the natural world.",
      image: "/images/landscapes.jpg",
      type: "canvas"
    },
    "Digital": {
      title: "Twilight Mountains",
      description: "This serene digital illustration depicts a mystical mountain range under the soft glow of a crescent moon. The artwork blends shades of purple, blue, and black, creating a calming and dreamy ambiance. With minimalist yet impactful details, this piece evokes a sense of peace and wonder, transporting viewers to a quiet, twilight world where nature’s beauty takes center stage.",
      image: "/images/digital.jpg",
      type: "digital"
    },
    "Mandala": {
      title: "Rainbow Mandala",
      description: "A celebration of color and geometry, this intricate mandala design features vibrant, overlapping patterns that radiate outward in a mesmerizing star formation. Each layer of the mandala is carefully crafted to balance symmetry with creative expression, resulting in a design that exudes energy, harmony, and vitality. The rainbow hues symbolize joy and diversity, making this piece both visually captivating and deeply meaningful.",
      image: "/images/mandala.jpg",
      type: "mandala"
    }
  };

  const handleSettingsChange = (newSettings) => {
    setGallerySettings({
      ...gallerySettings,
      ...newSettings,
      defaultCategory: selectedCategory // Keep the current category
    });
  };

  return (
    <div className="about">
      <section className="about__intro">
        <h2>About Me</h2>
        <div className="about__content">
          <p className="bio-text">
          Welcome! I'm a Software Engineer and Creative Thinker who thrives at the intersection of technology and artistry. Currently, I’m pursuing my Master’s in Information Systems at Northeastern University, where I’m deepening my expertise in software development, data-driven decision-making, and algorithmic problem-solving. With a passion for building impactful solutions, I specialize in creating efficient, user-friendly applications that blend functionality with elegance.
          </p>
          <p className="bio-highlight">
          Beyond my technical pursuits, I’m an artist at heart, constantly exploring diverse creative mediums such as traditional Indian art, modern resin crafts, and digital illustrations. This creative journey inspires my approach to software engineering, enabling me to bring a fresh perspective, a meticulous eye for detail, and boundless imagination to every project I undertake.
          </p>
          <p className="bio-highlight">
          In both my professional and personal endeavors, I believe in the power of creativity and innovation to drive meaningful change. Whether I’m coding an application or crafting a piece of art, my goal is to leave a lasting impression through thoughtful design and execution.
          </p>
        </div>
      </section>

      <section className="skills" aria-labelledby="skills-title">
        <h2 id="skills-title">Skills & Expertise</h2>
        <div className="skills-accordion" role="tablist" aria-label="Skills categories">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="accordion-item">
              <button 
                className={`accordion-header ${activeCategory === category ? 'active' : ''}`}
                onClick={() => toggleCategory(category)}
                role="tab"
                aria-selected={activeCategory === category}
                aria-expanded={activeCategory === category}
                aria-controls={`${category}-content`}
                id={`${category}-tab`}
              >
                {category}
                <span className="accordion-icon" aria-hidden="true">
                  {activeCategory === category ? '−' : '+'}
                </span>
              </button>
              <div 
                id={`${category}-content`}
                className={`accordion-content ${activeCategory === category ? 'active' : ''}`}
                role="tabpanel"
                aria-labelledby={`${category}-tab`}
                hidden={activeCategory !== category}
              >
                <div className="skills-grid" role="list" aria-label={`${category} skills`}>
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="skill-tag"
                      role="listitem"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="art-showcase">
      <div className="showcase-header">
        <div className="showcase-header-content">
          <h2>Creative Portfolio</h2>
          <p className="showcase-description">
            My artistic ventures allow me to embrace colors, textures, and stories in unique ways. Here's a glimpse of some of my favorite projects:
          </p>
          <button 
            className="customize-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Customize View
          </button>
        </div>
      </div>

        <div className="art-categories">
          <button 
            className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Art
          </button>
          {Object.keys(artworks).map(type => (
            <button
              key={type}
              className={`category-btn ${selectedCategory === type ? 'active' : ''}`}
              onClick={() => setSelectedCategory(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className={`artwork-panels ${gallerySettings.layout} ${gallerySettings.imageSize}`}>
          {Object.entries(artworks)
            .filter(([_, art]) => selectedCategory === 'all' || art.type === selectedCategory.toLowerCase())
            .map(([key, art]) => (
              <div 
                className="artwork-panel" 
                key={key}
                style={{ 
                  animation: isLoaded && gallerySettings.animation ? 'fadeIn 0.5s ease-in-out' : 'none',
                  opacity: isLoaded ? 1 : 0
                }}
              >
                <div className="artwork-image">
                  <img src={art.image} alt={art.title} loading="lazy" />
                </div>
                <div className="artwork-details">
                  <h3>{art.title}</h3>
                  <p>{art.description}</p>
                  <span className="artwork-type">{key}</span>
                </div>
              </div>
            ))}
        </div>
      </section>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSettingsChange}
        currentSettings={gallerySettings}
      />

    </div>
  );
}

export default About;