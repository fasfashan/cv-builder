import { useState } from "react";
import { PDFDocumentProps } from "@/types"; // Make sure the import is correct
import PersonalInfo from "@/components/sections/PersonalInfo";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import Preview from "@/components/sections/Preview";
import Experience from "@/components/sections/Experience";
import KeyProjects from "@/components/sections/KeyProjects";
import Certificates from "./components/sections/Certificate";
function App() {
  // Initialize state with the correct structure based on PDFDocumentProps
  const [cvData, setCvData] = useState<PDFDocumentProps["data"]>({
    personalInfo: {
      name: "",
      title: "",
      email: "",
      dob: "",
      education: "",
    },
    aboutMe: "",
    skills: [],
    experience: [],
    keyProjects: [],
    certificates: [],
  });

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-10">
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
          <Certificates
            data={cvData.certificates}
            onChange={(certificates) => setCvData({ ...cvData, certificates })}
          />
        </div>
        <Preview data={cvData} />
      </div>
    </div>
  );
}

export default App;
