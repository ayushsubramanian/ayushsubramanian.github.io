"use client";
import React from 'react';
import { images } from '../images';
import {
    ExperienceSection,
    ExperienceDescription,
    ExperienceList,
    ExperienceItemWrapper,
    ExperienceLogo,
    ExperienceContent,
    ExperienceDate,
    SectionTitle,
} from './style';

const ExperienceItem = ({ logo, title, description, date }) => (
    <ExperienceItemWrapper>
      <ExperienceLogo>
        <img src={logo} alt={`${title} logo`} className="experience-logo" />
      </ExperienceLogo>
      <ExperienceContent>
        <h3 className="experience-title">{title}</h3>
        <ul className="experience-description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </ExperienceContent>
      <ExperienceDate>{date}</ExperienceDate>
    </ExperienceItemWrapper>
);

function Experience() {
    return (
        <ExperienceSection id="experience-section">
            <SectionTitle>
            <span className="section-number">&lt;3&gt;</span> Experience
            </SectionTitle>
            <ExperienceDescription>
            Here is a quick summary of my most recent experiences:
            </ExperienceDescription>
            <ExperienceList>
            <ExperienceItem
                logo={images.typicl_logo}
                title="AI/ML Intern"
                description={[
                "Utilized Python, TensorFlow, and other technologies to develop and deploy Stable Diffusion models for image segmentation, style transfer, and image enhancement, leveraging deep learning architectures to achieve scalable solutions.",
                "Executed comprehensive market analysis to research competitor pricing strategies and consumer trends, leading to the implementation of a data-driven pricing model for the Typicl.ai app, enhancing revenue optimization and market positioning.",
                "Collaborated closely with a diverse team of 10-12 professionals, including developers, designers, and product managers, to integrate AI-driven features seamlessly into the app’s user interface and experience.",
                ]}
                date="May 2024 - August 2024"
            />
            <ExperienceItem
                logo={images.ncstate_logo}
                title="Research Intern"
                description={[
                "Implemented computer software like AutoCAD and IntelliJ to design hydration sensors, integrate hardware with code, and run data collection programs for sensor analysis.",
                "Conducted a comprehensive review of existing research papers on wearable electronics fabrication, synthesized key findings into an extensive literature review, and collaborated closely with mentor and lab peers.",
                "Analyzed market potential and commercial applications for wearable electronics, translating technical research into actionable insights for business development and strategic decision-making within the lab’s projects.",
                ]}
                date="August 2022 - May 2023"
            />
            </ExperienceList>
        </ExperienceSection>
    );
}

export default Experience;