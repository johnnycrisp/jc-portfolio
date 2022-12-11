import { Link } from 'gatsby';
import React from 'react';
import {AiFillMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Footer = () => (
  <footer>
    {/* <p className="footer__copy mt-5">&copy; Johnny {new Date().getFullYear()}</p> */}
    <div>
    <Link><AiFillMail /></Link> 
    <Link><AiFillLinkedin /></Link>
    <Link><AiFillGithub /></Link>
    </div>
    {/* <Link to="">Back to top</Link> */}
  </footer>
);

export default Footer;