import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiFileText, FiCheckCircle, FiAlertCircle, FiMail, FiLock } from 'react-icons/fi';
import './TermsOfService.css';

const TermsOfService = () => {
  const termsData = [
    {
      icon: <FiCheckCircle />,
      title: "1. Use of Our Website",
      content: [
        "Our website provides productivity tips, remote work resources, and professional development information for educational purposes only.",
        "You agree to use our website and email services in a lawful and respectful manner.",
        "You must not misuse the site (e.g., upload harmful content, spam, or attempt to disrupt functionality).",
        "By accessing or using our website and subscribing to our email updates, you agree to these Terms of Service."
      ]
    },
    {
      icon: <FiMail />,
      title: "2. Email Subscription",
      content: [
        "By subscribing with your email, you agree to receive periodic productivity updates, newsletters, work-from-home tips, and resources from us.",
        "You can unsubscribe at any time by clicking the unsubscribe link in our emails.",
        "We do not send spam, sell, or share your email address with third parties for marketing purposes.",
        "We are committed to responsible email practices and respect your inbox."
      ]
    },
    {
      icon: <FiAlertCircle />,
      title: "3. Content Disclaimer",
      content: [
        "The information provided on OnlineAtWork.com is for general informational and educational purposes only.",
        "We do our best to provide accurate and reliable information, but we make no guarantees about the completeness, reliability, or accuracy of this information.",
        "Any action you take based on the information found on this website is strictly at your own risk.",
        "We recommend consulting with qualified professionals for specific advice related to your situation."
      ]
    },
    {
      icon: <FiLock />,
      title: "4. Privacy",
      content: [
        "Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.",
        "We collect only the information necessary to provide you with our services and improve your experience.",
        "We implement appropriate security measures to protect your personal information.",
        "You have rights regarding your personal data as outlined in our Privacy Policy."
      ]
    },
    {
      icon: <FiFileText />,
      title: "5. Intellectual Property",
      content: [
        "All content (articles, images, graphics, resources, and tools) on this website is the property of OnlineAtWork.com, unless otherwise noted.",
        "You may not copy, distribute, or reproduce our content without express written permission.",
        "Trademarks, logos, and service marks displayed on the website are the property of OnlineAtWork or their respective owners.",
        "Unauthorized use of our intellectual property may violate copyright, trademark, and other laws."
      ]
    },
    {
      icon: <FiAlertCircle />,
      title: "6. Limitation of Liability",
      content: [
        "OnlineAtWork.com is not liable for any direct or indirect damages arising from the use of our content or email communications.",
        "We provide information and resources 'as is' without warranties of any kind, either express or implied.",
        "In no event shall OnlineAtWork be liable for any loss of profits, data, or other intangible losses.",
        "Some jurisdictions do not allow limitations on implied warranties, so these limitations may not apply to you."
      ]
    },
    {
      icon: <FiCheckCircle />,
      title: "7. Third-Party Links",
      content: [
        "Our website or emails may contain links to third-party sites, tools, or resources.",
        "We are not responsible for the content, practices, policies, or availability of those external websites.",
        "The inclusion of any link does not imply endorsement by OnlineAtWork.",
        "You access third-party websites at your own risk and should review their terms and privacy policies."
      ]
    },
    {
      icon: <FiFileText />,
      title: "8. Changes to Terms",
      content: [
        "We may update these Terms of Service from time to time to reflect changes in our practices or for legal reasons.",
        "Any changes will be posted on this page with an updated effective date.",
        "Continued use of our website or email services after changes are posted means you accept the updated terms.",
        "We encourage you to review these Terms periodically to stay informed."
      ]
    },
    {
      icon: <FiMail />,
      title: "9. Contact Us",
      content: [
        "For questions regarding these Terms of Service, please contact us at:",
        "Email: contact@onlineatwork.com",
        "We will respond to all inquiries in a timely and professional manner.",
        "Your feedback and questions are important to us."
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="terms-page">
      <div className="terms-hero">
        <div className="terms-hero-bg"></div>
        <div className="terms-container">
          <Link to="/" className="back-link">
            <FiArrowLeft />
            <span>Back to Home</span>
          </Link>
          <div className="terms-hero-content">
            <div className="terms-icon-wrapper">
              <div className="terms-icon-bg"></div>
              <FiFileText className="terms-icon" />
            </div>
            <h1 className="terms-hero-title">Terms of Service</h1>
            <p className="terms-hero-subtitle">
              Please read these terms carefully before using our services. By using OnlineAtWork, you agree to these terms.
            </p>
            <div className="terms-date">
              <span className="date-label">Effective Date:</span>
              <span className="date-value">November 9, 2025</span>
            </div>
          </div>
        </div>
      </div>

      <section className="terms-content">
        <div className="terms-container">
          <div className="terms-intro">
            <div className="intro-card">
              <p>
                Welcome to <strong className="brand-name">OnlineAtWork</strong>. By accessing or using our website and subscribing to our email updates, 
                you agree to these Terms of Service. Please read them carefully.
              </p>
              <p>
                These Terms govern your use of our productivity resources, remote work tools, and professional development content. 
                If you do not agree with any part of these Terms, please do not use our website or services.
              </p>
            </div>
          </div>

          <div className="terms-sections">
            {termsData.map((section, index) => (
              <div key={index} className="terms-section">
                <div className="section-header">
                  <div className="section-icon">
                    {section.icon}
                  </div>
                  <h2 className="terms-section-title">{section.title}</h2>
                </div>
                <ul className="terms-list">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="terms-list-item">
                      <span className="list-bullet"></span>
                      <span className="list-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="terms-footer-note">
            <div className="footer-note-icon">
              <FiAlertCircle />
            </div>
            <h3>Changes to Terms</h3>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
              provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material 
              change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our services after any revisions become effective, you agree to be 
              bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use our services.
            </p>
          </div>

          <div className="terms-cta">
            <button className="scroll-top-button" onClick={scrollToTop}>
              Back to Top
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
