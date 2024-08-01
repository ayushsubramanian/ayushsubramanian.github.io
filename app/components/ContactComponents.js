"use client";
import React from 'react';
import { images } from '../images';
import {
    ContactSection,
    ContactDescription,
    ContactInfo,
    ContactItem,
    ContactText,
    CopyButton,
    SocialPrompt,
    SectionTitle,
} from './style';

function Contact() {

    const [copied, setCopied] = React.useState(null);
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('sayush@unc.edu')
        .then(() => setCopied('Email'))
        .catch((err) => console.error('Failed to copy email:', err));
    };
    const handleCopyPhone = () => {
        navigator.clipboard.writeText('704-449-6089')
        .then(() => setCopied('Phone'))
        .catch((err) => console.error('Failed to copy phone number:', err));
    };

    return (
        <ContactSection id="contact-section">
            <SectionTitle>
            <span className="section-number">&lt;5&gt;</span> Contact
            </SectionTitle>
            <ContactDescription>
            Feel free to reach out to me if you&apos;re looking for an
            intern, have a question, or simply want to connect!
            </ContactDescription>
            <ContactInfo>
            <ContactItem>
                <img
                src={images.contactemail_icon}
                alt="Email icon"
                className="contact-icon"
                />
                <ContactText>sayush@unc.edu</ContactText>
                <CopyButton onClick={handleCopyEmail} aria-label="Copy email">
                <img
                    src={images.copy_icon}
                    alt="Copy icon"
                />
                </CopyButton>
            </ContactItem>
            <ContactItem>
                <img
                src={images.contactphone_icon}
                alt="Phone icon"
                className="contact-icon"
                />
                <ContactText>(704) 449 - 6089</ContactText>
                <CopyButton onClick={handleCopyPhone} aria-label="Copy phone number">
                <img
                    src={images.copy_icon}
                    alt="Copy icon"
                />
                </CopyButton>
            </ContactItem>
            </ContactInfo>
            <SocialPrompt>
            You can also find me on any of the platforms to the right &nbsp;--&gt;
            </SocialPrompt>
        </ContactSection>
    );
}

export default Contact;