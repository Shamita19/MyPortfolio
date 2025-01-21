import React from 'react';
import '../app/globals.css'; // Ensure this CSS file exists

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Shamita's Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
