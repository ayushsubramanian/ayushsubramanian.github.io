"use client";
import React from 'react';
import { images } from '../images';
import {
    SkillsSection,
    SkillsDescription,
    SkillsGrid,
    SkillItemWrapper,
    SectionTitle,
} from './style';

const SkillItem = ({ icon, name }) => (
    <SkillItemWrapper>
      <img src={icon} alt={`${name} icon`} className="skill-icon" />
      <p className="skill-name">{name}</p>
    </SkillItemWrapper>
);

function Skills() {
    return (
        <SkillsSection id="skills-section">
            <SectionTitle>
            <span className="section-number">&lt;2&gt;</span> Skills
            </SectionTitle>
            <SkillsDescription>
            The skills, tools and technologies I&apos;ve used before:
            </SkillsDescription>
            <SkillsGrid>
            <SkillItem
                icon={images.python_icon}
                name="Python"
            />
            <SkillItem
                icon={images.java_icon}
                name="Java"
            />
            <SkillItem
                icon={images.tensorflow_icon}
                name="Tensorflow"
            />
            <SkillItem
                icon={images.pytorch_icon}
                name="PyTorch"
            />
            <SkillItem
                icon={images.mysql_icon}
                name="MySQL"
            />
            <SkillItem
                icon={images.git_icon}
                name="Git"
            />
            <SkillItem
                icon={images.html_icon}
                name="HTML"
            />
            <SkillItem
                icon={images.css_icon}
                name="CSS"
            />
            <SkillItem
                icon={images.javascript_icon}
                name="Javascript"
            />
            <SkillItem
                icon={images.react_icon}
                name="React"
            />
            <SkillItem
                icon={images.nextjs_icon}
                name="Next.js"
            />
            <SkillItem
                icon={images.figma_icon}
                name="Figma"
            />
            </SkillsGrid>
        </SkillsSection>
    );
}

export default Skills;