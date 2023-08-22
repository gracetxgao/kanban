import React from "react";
import LinkedinLogo from '../assets/linkedin.png';
import GithubLogo from '../assets/github.png';
import EmailLogo from '../assets/email.png';

const Footer = () => {
return (
	<div 
        className="bg-slate-400 flex justify-center"
        style={{width:1024}}
    >
        <a href="https://www.linkedin.com/in/gracetxgao">
            <img 
                src={LinkedinLogo} 
                style={{ width:40}}
            />
        </a>
        <a href="">
            <img 
                src={GithubLogo} 
                style={{ width:40}}
            />
        </a>
        <a href="">
            <img 
                src={EmailLogo} 
                style={{ width:40}}
            />
        </a>
	</div>
);
};
export default Footer;
