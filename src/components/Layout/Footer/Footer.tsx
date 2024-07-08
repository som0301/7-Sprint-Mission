import React from "react";
import "./Footer.css";
import facebookLogo from "../../../assets/images/social/facebook-logo.svg";
import twitterLogo from "../../../assets/images/social/twitter-logo.svg";
import youtubeLogo from "../../../assets/images/social/youtube-logo.svg";
import instagramLogo from "../../../assets/images/social/instagram-logo.svg";
import { Link } from "react-router-dom";

interface SocialLink {
  href: string;
  imgSrc: string;
  alt: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com",
    imgSrc: facebookLogo,
    alt: "페이스북",
  },
  {
    href: "https://twitter.com/",
    imgSrc: twitterLogo,
    alt: "트위터",
  },
  {
    href: "https://www.youtube.com/",
    imgSrc: youtubeLogo,
    alt: "유튜브",
  },
  {
    href: "https://www.instagram.com/",
    imgSrc: instagramLogo,
    alt: "인스타그램",
  },
];

interface FooterLink {
  to: string;
  text: string;
}

const footerLinks: FooterLink[] = [
  { to: "/privacy", text: "Privacy Policy" },
  { to: "/faq", text: "FAQ" },
];

const Footer: React.FC = () => {
  return (
    <footer>
      <div id="copyright">©codeit - 2024</div>
      <div id="footerMenu">
        {footerLinks.map(({ to, text }, index) => (
          <Link key={index} to={to}>
            {text}
          </Link>
        ))}
      </div>
      <div id="socialMedia">
        {socialLinks.map(({ href, imgSrc, alt }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            <img src={imgSrc} alt={alt} width="20" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
