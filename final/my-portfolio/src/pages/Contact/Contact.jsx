// src/pages/Contact/Contact.jsx
import { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    projectType: '',
    otherDetails: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.length < 2) {
      tempErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (formData.inquiryType === 'project' && !formData.projectType) {
      tempErrors.projectType = 'Please select a project type';
      isValid = false;
    }

    if (formData.inquiryType === 'other' && !formData.otherDetails.trim()) {
      tempErrors.otherDetails = 'Please specify your inquiry type';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('');

    if (validateForm()) {
      try {
        console.log('Form submitted:', formData);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          inquiryType: 'general',
          projectType: '',
          otherDetails: '',
          message: ''
        });
      } catch (error) {
        setSubmitStatus('error');
      }
    }
  };

  return (
    <div className="contact" role="main">
      <div className="contact__container">
        <div className="contact__info" aria-labelledby="contact-heading">
          <h1 id="contact-heading">Let's Connect</h1>
          <p>Feel free to reach out for opportunities or collaborations</p>
          
          <div className="contact__details" role="list">
            <div className="contact__item" role="listitem">
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              <span>dubey.g@northeastern.edu</span>
            </div>
            <div className="contact__item" role="listitem">
              <FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" />
              <span>San Jose, CA</span>
            </div>
          </div>

          <div className="contact__social" aria-label="Social media links">
            <a 
              href="https://www.linkedin.com/in/gayatri-dubey/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile (opens in new tab)"
            >
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            </a>
            <a 
              href="https://github.com/gayatridt" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile (opens in new tab)"
            >
              <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            </a>
          </div>
        </div>

        <form 
          className="contact__form" 
          onSubmit={handleSubmit} 
          aria-label="Contact form"
          noValidate
        >
          <div className="form__grid">
            <div className="form__group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                aria-required="true"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span id="name-error" className="error-message" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form__group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="error-message" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form__group">
              <label htmlFor="inquiryType">Type of Inquiry</label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                aria-required="true"
              >
                <option value="general">General Inquiry</option>
                <option value="project">Project Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            {formData.inquiryType === 'project' && (
              <div className="form__group">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  aria-required="true"
                >
                  <option value="">Select Project Type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="data">Data Science</option>
                  <option value="cloud">Cloud Solutions</option>
                </select>
              </div>
            )}

            {formData.inquiryType === 'other' && (
              <div className="form__group">
                <label htmlFor="otherDetails">Please Specify</label>
                <input
                  type="text"
                  id="otherDetails"
                  name="otherDetails"
                  value={formData.otherDetails}
                  onChange={handleChange}
                  aria-required="true"
                  placeholder="Specify your inquiry"
                />
              </div>
            )}
          </div>

          <div className="form__group full-width">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              rows="5"
              aria-required="true"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            ></textarea>
            {errors.message && (
              <span id="message-error" className="error-message" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          {submitStatus && (
            <div 
              className={`${submitStatus}-message`} 
              role={submitStatus === 'success' ? 'status' : 'alert'}
              aria-live="polite"
            >
              {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
            </div>
          )}

          <button 
            type="submit" 
            className="submit-btn"
            aria-label="Send message"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;