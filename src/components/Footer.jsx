import React from "react";
import LinkedinLogo from '../assets/linkedin.png';
import GithubLogo from '../assets/github.png';
import EmailLogo from '../assets/email.png';

const Footer = () => {
return (
	<div className="bg-blue-300 flex justify-center w-screen h-36">
        <a href="https://www.linkedin.com/in/gracetxgao">
            <img src={LinkedinLogo} className="w-10 m-12"/>
        </a>
        <a href="https://www.linkedin.com/in/gracetxgao">
            <img src={GithubLogo} className="w-10 m-12"/>
        </a>
        <a href="https://www.linkedin.com/in/gracetxgao">
            <img src={EmailLogo} className="w-10 m-12"/>
        </a>
	</div>
);
};
export default Footer;
