import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h3>Gayatri Dubey</h3>
          <p>Graduate Student | Software Engineer</p>
        </div>
        <div className="footer__social">
          <a 
            href="https://www.linkedin.com/in/gayatri-dubey/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
          <a 
            href="https://github.com/gayatridt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        </div>
        <div className="footer__copyright">
          <p>© 2024 Gayatri Dubey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;