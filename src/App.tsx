// src/App.tsx
import { useState } from "react";
import PersonalInfo from "@/components/sections/PersonalInfo";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import Preview from "@/components/sections/Preview";
import Experience from "@/components/sections/Experience";
import KeyProjects from "@/components/sections/KeyProjects"; // Updated import path

// interface Project {
//   title: string;
//   description: string;
//   technologies: string[];
//   startDate: string;
//   endDate: string;
//   link?: string;
// }

// interface ExperienceItem {
//   jobTitle: string;
//   company: string;
//   location: string;
//   startDate: string;
//   endDate: string;
//   responsibilities: string[];
//   keyProjects: Project[];
// }

function App() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      name: "",
      title: "",
      email: "",
      dob: "",
      education: "", // Tambahkan education field
    },
    aboutMe: "",
    skills: [],
    keyProjects: [],
    experience: [],
  });

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <PersonalInfo
            data={cvData.personalInfo}
            onChange={(data) => setCvData({ ...cvData, personalInfo: data })}
          />
          <AboutMe
            data={cvData.aboutMe}
            onChange={(text) => setCvData({ ...cvData, aboutMe: text })}
          />
          <Skills
            data={cvData.skills}
            onChange={(skills) => setCvData({ ...cvData, skills })}
          />
          <Experience
            data={cvData.experience}
            onChange={(experience) => setCvData({ ...cvData, experience })}
          />
          <KeyProjects
            data={cvData.keyProjects}
            onChange={(keyProjects) => setCvData({ ...cvData, keyProjects })}
          />
        </div>
        <Preview data={cvData} />
      </div>
    </div>
  );
}

export default App;
