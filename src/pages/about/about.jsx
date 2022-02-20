import { FiCheckSquare } from "react-icons/fi";
import { FiDatabase } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";

import Skills from "./components/skills/skills";
import "./about.scss";
import CardWrapper from "../../components/card-wrapper/card-wrapper";
import InfoBlock from "./components/info-block/info-block";
import unirevsity from "./images/university.png";
import google from "./images/google.png";
import house from "./images/house.png";
import lmf from "./images/lmf.png";
import citysites from "./images/citysites.jpeg";
import logo032 from "./images/logo032.png";
const skillsData = [
  {
    icon: <FiCheckSquare />,
    title: "Technical skills",
    skills: ["JavaScript", "React", "HTML", "CSS", "SASS"],
  },
  {
    icon: <FiDatabase />,
    title: "Background",
    skills: ["Journalism", "Marketing", "Project managment"],
  },
  {
    icon: <FiUserCheck />,
    title: "Soft skills",
    skills: [
      "Problem solving and creativity",
      "Critical thinking",
      "Communication",
      "Time management and organization",
    ],
  },
];
const experienceData = [
  {
    name: "Program Manager, Media",
    icon: <img src={citysites} />,
    institution: "CitySitesGlobal",
    description: [
      "Increased yearly audience views by 37% (74 -> 101 million views)",
      "Led 8 media teams of editors, journalists, and copywriters.",
      "Interviewed, hired, developed, evaluated, coached, and inspired employees. Incorporated feedback and solved conflicts across cross-functional teams.",
      "Developed and enforced content standards for media teams to establish processes and build trust & relationships with the audience.",
    ],
  },
  {
    name: "Editor In Chief",
    icon: <img src={logo032} />,
    institution: "Website 032.ua ",
    description: [
      "Developed and launched dozens of unique media projects, like “Restaurants test-drive”, “Interview with deputy over the coffee ”, “Local lakes test-drive”, etc.",
      "Led the media team.",
      "Increased the average daily website views by 185% from 13,000 to 37,000.",
      "Developed social media audience channels.",
      "Coaching junior content managers.",
      "Conducted interviews, investigated stories, wrote SEO content for the website.",
    ],
  },
  {
    name: "Content Manager",
    icon: <img src={logo032} />,
    institution: "Website 032.ua ",
    description: [
      "Worked closely with the Leadership and Sales teams in order to develop content.",
      "Worked with the custom WordPress-like CRM.",
      "Written dozens of key SEO pieces which indexed particularly well in high-demand categories.",
      "Responsible for overseeing the planning, organization, creation, and publishing of web content",
    ],
  },
];
const educationData = [
  {
    title: "Education:",
    icon: <img src={unirevsity} />,
    name: "Ivan Franko National University of Lviv",
    institution: "Master's degree, Journalism",
    years: "2010 - 2016",
    grade: "Grade: 4.0",
    description:
      "Lviv National University named after Ivan Franko ranked 9th in the Ukrainian national university ranking according to IREG Observatory on Academic Ranking and Excellence in 2021.",
  },
  {
    title: "Licenses & certifications:",
    icon: <img src={google} />,
    name: "Google Project Management Certificate ",
    institution: "Google",
    years: "Issued Jan 2021 · No Expiration Date",
  },
  {
    icon: <img src={house} />,
    name: "Media boost program with Franak Viacorka",
    institution: "America House Kyiv ",
    years: "Issued Jul 2020 · No Expiration Date",
  },
  {
    icon: <img src={lmf} />,
    name: "Media Management School",
    institution: "Lviv Media Forum",
    years: "Issued Jan 2018 · No Expiration Date",
  },
];

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="header-about">
          <div className="container header-about-content"></div>
        </div>
        <div>
          <div className="overview-container">
            <div className="overview-title">Skills Overview</div>
            <div className="overview-content">
              I have experience managing distributed media teams. Recently, I
              decided to pivot to tech and below is a quick overview of my
              technical skills, soft skills and experience.
            </div>
          </div>
          <div className="main-about-skills">
            {skillsData.map(({ icon, title, skills }, index) => (
              <Skills key={index} icon={icon} skills={skills} title={title} />
            ))}
          </div>
        </div>
      </div>
      <div className="experience-education-container">
        <div className="about-content">
          <CardWrapper title="Experience:">
            {experienceData.map(
              ({
                title,
                icon,
                name,
                institution,
                years,
                grade,
                description,
              }) => (
                <InfoBlock
                  key={name}
                  title={title}
                  icon={icon}
                  name={name}
                  institution={institution}
                  years={years}
                  grade={grade}
                  description={description}
                />
              )
            )}
          </CardWrapper>
          <CardWrapper>
            {educationData.map(
              ({
                title,
                icon,
                name,
                institution,
                years,
                grade,
                description,
              }) => (
                <InfoBlock
                  key={name}
                  title={title}
                  icon={icon}
                  name={name}
                  institution={institution}
                  years={years}
                  grade={grade}
                  description={description}
                />
              )
            )}
          </CardWrapper>
        </div>
      </div>
    </div>
  );
}
