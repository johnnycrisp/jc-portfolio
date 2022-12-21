// import { Link } from 'gatsby';
import React from 'react';
import {AiFillMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Footer = () => (
  <footer>
    {/* <p className="footer__copy mt-5">&copy; Johnny {new Date().getFullYear()}</p> */}
    <div>
    <a href="mailto:johnnycrisp2@gmail.com?subject=Hi!&body=Nice%20website%20Johnny,"
                target="_blank" rel="noreferrer"><AiFillMail /></a> 
    <a href="https://www.linkedin.com/in/johnny-c-a5737a14b/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
    <a href="https://github.com/johnnycrisp" target="_blank" rel="noreferrer"><AiFillGithub /></a>
    </div>
    {/* <Link to="">Back to top</Link> */}
  </footer>
);

export default Footer;