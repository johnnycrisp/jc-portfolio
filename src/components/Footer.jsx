import { Link } from 'gatsby';
import React from 'react';

const Footer = () => (
  <footer>
    <p className="footer__copy">&copy; Johnny {new Date().getFullYear()}</p>
    {/* <Link to="">Back to top</Link> */}
  </footer>
);

export default Footer;