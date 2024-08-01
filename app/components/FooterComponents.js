"use client";
import React from 'react';
import { images } from '../images';
import {
    FooterSection,
    FooterContent,
    FooterText,
} from './style';

function Footer() {
    return (
        <FooterSection>
            <FooterContent>
            <img
                src={images.copyright_icon}
                alt="Footer icon"
                className="footer-icon"
            />
            <FooterText>
                <span className="year">2024</span>
                <span className="divider"> | </span>  
                <span className="designed"><a href="https://www.figma.com/design/qx0jt8gT90WEHyTVpzx5Ql/Personal-Website?m=auto&t=vorrVqcM30cqY49b-6" className="link" target="_blank" rel="noopener noreferrer">Designed</a></span>
                <span> and </span>
                <span className="coded"><a href="https://github.com/ayushsubramanian/ayushsubramanian.github.io" className="link" target="_blank" rel="noopener noreferrer">coded</a></span>
                <span> by </span>
                <span className="name">Ayush Subramanian</span>
            </FooterText>
            </FooterContent>
        </FooterSection>
    );
}

export default Footer;