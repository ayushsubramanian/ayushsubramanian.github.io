"use client";
import React from 'react';
import { images } from '../images';
import {
    AboutSection,
    AboutContent,
    AboutImage,
    AboutText,
    SectionTitle,
} from './style';

function About() {
    return (
        <AboutSection id="about-section">
            <SectionTitle>
            <span className="section-number">&lt;1&gt;</span> About Me
            </SectionTitle>
            <AboutContent>
            <AboutImage
                src={images.about_image}
                alt="About me"
            />
            <AboutText>
                <h3>Want to know more? Here you have it...</h3>
                <p>
                I&apos;m a passionate and motivated student looking to get more
                involved in the world of technology. I began coding 4 years ago in
                high school, and since then, I&apos;ve continued to grow and evolve as
                a student as well as a problem solver. By taking on new challenges
                and learning the latest technologies along the way, I hope to push
                the boundaries of what technology can achieve.
                </p>
                <p>
                My goal is to create innovative solutions that address real-world
                problems, enhance user experiences, and contribute to the fields
                of software engineering, data analytics, and machine learning. As
                a progressive thinker, I enjoy watching projects evolve through
                their various stages, from initial ideation to final development.
                I thrive on seeing ideas come to life and my strong organizational
                skills allow me to meticulously manage each step to ensure
                successful outcomes.
                </p>
                <p>
                When I&apos;m not sitting at a computer, you can find me watching
                Premier League games on the weekend or kicking a soccer ball
                around with my friends at night. I love hanging out with friends,
                creating memories, and meeting new people, so if you want to
                connect, I&apos;d be happy to chat and share our passions. Feel free to
                reach out!
                </p>
            </AboutText>
            </AboutContent>
        </AboutSection>
    );
}

export default About;