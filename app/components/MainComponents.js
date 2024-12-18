"use client";
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { images } from '../images';
import {
    MainSection,
    HeroSection,
    HeroContent,
    IntroText,
    Name,
    Description,
    UniversityName,
    LocationInfo,
    AvailabilityInfo,
    pulsate,
    StatusIndicator,
    HeroImage,
    SocialLinks,
    SocialLink,
    SocialLinkDivider,
} from './style';

function Main() {
    return (
        <MainSection id="top">
            <HeroSection>
                <HeroContent>
                <IntroText>
                    <ReactTypingEffect
                        text={["Hi, my name is"]}
                        speed={100}
                        eraseDelay={1000}
                        typingDelay={500}
                    />
                </IntroText>
                <Name>Ayush Subramanian</Name>
                <Description>
                    I&apos;m a second-year undergraduate student at the{" "}
                    <UniversityName>
                    University of North Carolina at Chapel Hill
                    </UniversityName>{" "}
                    with a double major in Computer Science and Business Administration. I am
                    heavily interested in topics within AI/ML, Data/Business Analytics, and Product Management
                    and hope to gain as many technical and soft skills as I can and
                    apply them to projects and my career!
                </Description>
                <LocationInfo>
                    <img
                    src={images.location_icon}
                    alt="Location icon"
                    className="location-icon"
                    />
                    <span>Charlotte, North Carolina</span>
                </LocationInfo>
                <AvailabilityInfo>
                    <StatusIndicator />
                    <span>Available for new projects and work</span>
                </AvailabilityInfo>
                </HeroContent>
                <HeroImage
                src={images.hero_image}
                alt="Ayush Subramanian"
                />
            </HeroSection>

            <SocialLinks>
                <SocialLink href="https://www.linkedin.com/in/ayush-subramanian/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <img
                    src={images.linkedin_icon}
                    alt="LinkedIn"
                />
                </SocialLink>
                <SocialLink href="https://github.com/ayushsubramanian" aria-label="Github" target="_blank" rel="noopener noreferrer">
                <img
                    src={images.github_icon}
                    alt="Github"
                />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/_ayush.sub/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <img
                    src={images.instagram_icon}
                    alt="Instagram"
                />
                </SocialLink>
                <SocialLink href="mailto:sayush@unc.edu" aria-label="Email" target="_blank" rel="noopener noreferrer">
                <img
                    src={images.email_icon}
                    alt="Email"
                />
                </SocialLink>
                <SocialLinkDivider />
            </SocialLinks>
        </MainSection>
    );
}

export default Main;