import { Link } from 'gatsby';
import React from 'react';

const Footer = () => (
  <footer>
    <p>&copy; Johnny {new Date().getFullYear()}</p>
    <Link to="">Link</Link>
  </footer>
);

export default Footer;