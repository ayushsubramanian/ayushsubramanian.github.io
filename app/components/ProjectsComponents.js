"use client";
import React from 'react';
import { images } from '../images';
import {
    ProjectsSection,
    ProjectsDescription,
    ProjectsList,
    ProjectCardWrapper,
    ProjectImageContainer,
    ProjectImage,
    ProjectContent,
    ProjectLink,
    SectionTitle,
} from './style';

const ProjectCard1 = ({ image, title, description, tags, linkIcon, linkURL }) => (
    <ProjectCardWrapper>
      <ProjectImageContainer>
        <ProjectImage src={image} alt={title} />
      </ProjectImageContainer>
      <ProjectContent>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <ProjectLink href={linkURL} target="_blank" rel="noopener noreferrer">
          <img src={linkIcon} alt="Project link" className="project-link-icon" />
        </ProjectLink>
      </ProjectContent>
    </ProjectCardWrapper>
);
  
const ProjectCard2 = ({ image, title, description, tags, linkIcon, linkURL }) => (
    <ProjectCardWrapper>
      <ProjectContent>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <ProjectLink href={linkURL} target="_blank" rel="noopener noreferrer">
          <img src={linkIcon} alt="Project link" className="project-link-icon" />
        </ProjectLink>
      </ProjectContent>
      <ProjectImageContainer>
        <ProjectImage src={image} alt={title} />
      </ProjectImageContainer>
    </ProjectCardWrapper>
);

function Projects() {
    return (
        <ProjectsSection id="projects-section">
            <SectionTitle>
            <span className="section-number">&lt;4&gt;</span> Projects
            </SectionTitle>
            <ProjectsDescription>
            Some of the noteworthy projects I have worked on:
            </ProjectsDescription>
            <ProjectsList>
            <ProjectCard2
                image={images.lora_image}
                title="LoRA XL Model Trainer and Image Generator"
                description="Trains a high-accuracy image generation model from an input dataset using Stable Diffusion XL, incorporating advanced techniques such as LoRA (Low-Rank Adaptation) for fine-tuning and extensive hyperparameter optimization. The model supports both text-to-image and image-to-image generation, enabling the creation of high-quality images."
                tags={["Python", "Machine Learning", "Stable Diffusion XL", "Image Generation", "Jupyter Notebook"]}
                linkIcon={images.projectlink_icon}
                linkURL="https://github.com/ayushsubramanian/LoRAXL-Trainer-and-Image-Generator"
            />
            <ProjectCard1
                image={images.soccersegmentation_image}
                title="Soccer Image Segmentation"
                description=" High-accuracy image segmentation model developed using Python, TensorFlow, and OpenCV to build and train convolutional neural networks to identify and segment players, the ball, and the field in soccer game footage. Implements a U-Net architecture, and boosts model performance by fine-tuning hyperparameters and employing data augmentation techniques."
                tags={["Python", "Tensorflow", "U-Net", "CNN", "Computer Vision", "Jupyter Notebook"]}
                linkIcon={images.projectlink_icon}
                linkURL="https://github.com/ayushsubramanian/Soccer-Image-Segmentation"
            />
            <ProjectCard2
                image={images.motionmentor_image}
                title="Motion Mentor Form Corrector"
                description="Motion Mentor uses OpenCV for live video feeds and the Mediapipe API for precise pose detection to analyze users' exercise form in real-time. It calculates angles and proportions to identify mistakes and provides live feedback to help users correct their techniques and prevent injuries."
                tags={["Python", "OpenCV", "MediaPipe API", "Pose Detection", "Git"]}
                linkIcon={images.projectlink_icon}
                linkURL="https://devpost.com/software/motionmentor?ref_content=my-projects-tab&ref_feature=my_projects"
            />
            <ProjectCard1
                image={images.suiteshare_image}
                title="SuiteShare"
                description="SuiteShare is a computer application that aids high school and college students in managing finances and expenses amongst one another and within groups. It was designed and developed by me and a team of students using Tkinter, MySQL, and Python and implemented various data structures such as adjacency matrices, directed graphs, and max heaps."
                tags={["Python", "Git", "Tkinter", "MySQL", "Data Structures"]}
                linkIcon={images.projectlink_icon}
                linkURL="https://github.com/prathampatel21/suiteshare"
            />
            </ProjectsList>
        </ProjectsSection>
    );
}

export default Projects;