import styled, { keyframes, css } from 'styled-components';

export const PortfolioWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #111827;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  padding: 12px 35px;
   z-index: 1000;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    padding: 0 20px;
    flex-wrap: wrap;
  }
`;

export const Logo = styled.div`
  color: #7bafd4;
  font: 700 36px/90% Inter, sans-serif;
  letter-spacing: -0.8px;
  cursor: pointer; 
  transition: font-size 0.3s ease; 

  &:hover {
    font-size: 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 22px;
  color: #d1d5db;
  font-weight: 500;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const NavItemWrapper = styled.div`
  font-family: Inter, sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
  .nav-number {
    color: #7bafd4;
  }
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
  transition: font-size 0.3s ease-in-out; 
  position: relative;

  &:hover::after {
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #7bafd4;
    transition: width 0.3s ease-in-out;
  }
`;

export const NavDivider = styled.div`
  height: 36px;
  background-color: #4b5563;
  border: 1px solid #4b5563;
  margin: 0px 5px 0px -5px;
`;

export const ResumeButton = styled.a`
  font-family: Inter, sans-serif;
  font-size: 18px;
  border: 2px solid #7bafd4;
  border-radius: 10px;
  padding: 3px 8px;
  background: none;
  color: #d1d5db;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #374151;
`;

export const MainSection = styled.main`
  background-color: #111827;
  padding: 0px 10% 0px 0px;
  display: flex;
  height: 100vh;
  justify-content: center;
  @media (max-width: 800px) {
    padding: 0 20px;
    flex-wrap: wrap;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const HeroContent = styled.div`
  max-width: 700px;
  display: flex;
  margin-right: 100px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const IntroText = styled.p`
  color: #7bafd4;
  font: 600 22px/72px Inter, sans-serif;
  letter-spacing: -0.48px;
`;

export const Name = styled.h1`
  color: #f9fafb;
  font: 600 68px/100% Inter, sans-serif;
  letter-spacing: -1.44px;
  margin-top: 10px;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  color: #d1d5db;
  font: 400 22px/35px Inter,sans-serif;
  letter-spacing: 0.25px;
  margin-top: 40px;
`;

export const UniversityName = styled.span`
  font-weight: 700;
  color: #7bafd4;
`;

export const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 22px;
  color: #d1d5db;
  margin-top: 40px;
  .location-icon {
    width: 32px;
    height: 32px;
  }
`;

export const AvailabilityInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0px 10px;
  margin-top: 25px;
  font: 400 22px/100% Inter, sans-serif;
  color: #d1d5db;
`;

export const pulsate = keyframes`
  0% {
    transform: scale(1);
    background-color: #10b981;
  }
  50% {
    transform: scale(1.4);
    background-color: #0d9560;
  }
  100% {
    transform: scale(1);
    background-color: #10b981;
  }
`;

export const StatusIndicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #10b981;
  margin: 0px 10px 0px 0px;
  animation: ${pulsate} 2s infinite;
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 325px;
  aspect-ratio: 0.79;
  object-fit: cover;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const SocialLinks = styled.div`
  position: fixed;
  bottom: 0;
  right: 40px; 
  display: flex;
  flex-direction: column;
  align-items: center; /* Align items to the right */
  margin-top: auto;
  z-index: 1000; /* Ensure it's above other content */
  @media (max-width: 991px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  margin-top: 30px;
  img {
    width: 28px;
    height: 28px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.2);
  }

  &[aria-label="Email"] img {
    width: 28px;
    height: 32px;
  }
`;

export const SocialLinkDivider = styled.div`
  width: 2px;
  height: 70px;
  background-color: #f9fafb;
  margin-top: 30px;
`;

export const SectionTitle = styled.h2`
  font-family: Inter, sans-serif;
  font-size: 22px;
  letter-spacing: 1px;
  font-weight: 500;
  color: #d1d5db;
  background-color: #374151;
  border-radius: 15px;
  padding: 10px;
  display: inline-block;
  .section-number {
    color: #7bafd4;
  }
`;

export const AboutSection = styled.section`
  background-color: #111827;
  padding: 150px 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  gap: 75px;
  margin-top: 65px;
  justify-content: center;
  align-items: center; 
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const AboutImage = styled.img`
  max-width: 28%;
  max-height: 90%;
  aspect-ratio: 0.71;
  object-fit: cover;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

export const AboutText = styled.div`
  width: 45%;
  padding-right: 3%;
  font: 400 18px/27px Inter, sans-serif;
  text-align: left;
  @media (max-width: 991px) {
    width: 48%;
    margin-top: 40px;
  }
  h3 {
    color: #f9fafb;
    font: 600 28px/120% Inter, sans-serif;
    margin-bottom: 25px;
  }
  p {
    margin-top: 16px;
    text-align: left;
    color: #d1d5db;
  }
`;

export const SkillsSection = styled.section`
  background-color: #111827;
  padding: 150px 12%;
  color: #d1d5db;
  align-items: center;
  text-align: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const SkillsDescription = styled.p`
  text-align: center;
  color: #d1d5db;
  font: 400 20px/140% Inter, sans-serif;
  margin-top: 30px;
  max-width: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-between;
  gap: 65px 0px;
  margin-top: 65px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 40px;
  }
`;

export const SkillItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .skill-icon {
    width: 64px;
    height: 64px;
  }
  .skill-name {
    color: #d1d5db;
    margin-top: 10px;
    font: 400 18px/156% Inter, sans-serif;
  }
`;

export const ExperienceSection = styled.section`
  background-color: #111827;
  padding: 150px 17%;
  align-items: center;
  text-align: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const ExperienceDescription = styled.p`
  color: #d1d5db;
  text-align: center;
  font: 400 20px Inter, sans-serif;
  margin-top: 30px;
`;

export const ExperienceList = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  gap: 65px;
  margin-top: 65px;
`;

export const ExperienceItemWrapper = styled.div`
  display: flex;
  background-color: #1f2937;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0px 25px 25px 0px rgba(0, 0, 0, 0.15);
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const ExperienceLogo = styled.div`
  width: 19%;
  .experience-logo {
    width: 125px;
  }
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ExperienceContent = styled.div`
  width: 60%;
  @media (max-width: 991px) {
    width: 100%;
  }
  .experience-title {
    color: #f9fafb;
    font: 600 20px Inter, sans-serif;
  }
  .experience-description {
    color: #d1d5db;
    font: 400 16px/175% Inter, sans-serif;
    margin-top: 16px;
    padding-right: 50px;
    list-style-type: disc;
    padding-left: 20px;
  }
`;

export const ExperienceDate = styled.div`
  width: 22%;
  color: #d1d5db;
  font: 400 16px Inter, sans-serif;
  text-align: right;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ProjectsSection = styled.section`
  background-color: #111827;
  padding: 150px 10%;
  align-items: center;
  text-align: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const ProjectsDescription = styled.p`
  color: #d1d5db;
  text-align: center;
  font: 400 20px Inter, sans-serif;
  margin-top: 30px;
`;

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  margin-top: 65px;
`;

export const ProjectCardWrapper = styled.div`
  display: flex;
  text-align: left;
  background-color: #1f2937;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 25px 25px 0px rgba(0, 0, 0, 0.15);
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ProjectImageContainer = styled.div`
  max-width: 50%;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.15);
  height: auto;
  padding: 50px;
  background-color: #2d3748; /* Change this to the desired background color */
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const ProjectImage = styled.img` 
  object-fit: contain;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.15);
  margin: auto;
  @media (max-width: 991px) {
    width: 100%;
  }
  ${(props) => props.alt === 'SuiteShare' && css`
    max-width: 75%;
  `}
  ${(props) => props.alt === 'LoRA XL Model Trainer and Image Generator' && css`
    max-width: 95%;
  `}
`;

export const ProjectContent = styled.div`
  width: 50%;
  padding: 48px;
  @media (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
  .project-title {
    color: #f9fafb;
    font: 600 20px/140% Inter, sans-serif;
  }
  .project-description {
    color: #d1d5db;
    font: 400 16px/25px Inter, sans-serif;
    margin-top: 24px;
  }
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 24px;
  }
  .project-tag {
    background-color: #374151;
    color: #d1d5db;
    font: 500 14px/140% Inter, sans-serif;
    padding: 4px 20px;
    border-radius: 12px;
  }
`;

export const ProjectLink = styled.a`
  display: inline-block;
  cursor: pointer;
  margin-top: 24px;
  .project-link-icon {
    width: 28px;
    height: 28px;
    transition: transform 0.3s ease;
  }
  &:hover img {
    transform: scale(1.2);
  }
`;

export const ContactSection = styled.section`
  background-color: #111827;
  padding: 10% 60px 12% 60px;
  align-items: center;
  text-align: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const ContactDescription = styled.p`
  color: #d1d5db;
  text-align: center;
  font: 400 20px/28px Inter, sans-serif;
  max-width: 576px;
  margin: 30px auto 0;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 16px;
  &:first-child {
    margin-top: 0;
  }
  .contact-icon {
    width: 32px;
    height: 32px;
  }
`;

export const ContactText = styled.p`
  color: #7bafd4;
  font: 600 36px/111% Inter, sans-serif;
`;

export const CopyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  img {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }
  &:hover img {
    transform: scale(1.2);
  }
`;

export const SocialPrompt = styled.p`
  color: #d1d5db;
  font: 400 18px/133% Inter, sans-serif;
  text-align: center;
  margin-top: 48px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const FooterSection = styled.footer`
  background-color: #111827;
  padding: 25px 60px;
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  .footer-icon {
    width: 16px;
    height: 16px;
  }
`;

export const FooterText = styled.p`
  font: 400 14px/20px Inter, sans-serif;
  color: #d1d5db;
  .designed,
  .coded {
    text-decoration: underline;
    transition: font-size 0.3s ease, color 0.3s ease;
  }
  .designed:hover,
  .coded:hover {
    font-size: 16px;
    color: #7bafd4; 
  }
  .name {
    color: #7bafd4;
  }
  .divider {
  font-size: 16px;
  }
`;