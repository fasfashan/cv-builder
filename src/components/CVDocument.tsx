// components/CVDocument.tsx
import { Document, Page, StyleSheet, Font } from "@react-pdf/renderer";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";

Font.register({
  family: "Inter",
  fonts: [
    { src: "/fonts/Inter_Regular.ttf" },
    { src: "/fonts/Inter_Bold.ttf", fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Inter",
  },
});

export interface CVData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  experience: {
    company: string;
    positions: {
      title: string;
      duration: string;
      description: string;
    }[];
  }[];
  skills: {
    category: string;
    skills: string[];
  }[];
  education: {
    school: string;
    degree: string;
    duration: string;
    description?: string;
  }[];
}

interface CVDocumentProps {
  formData: CVData;
}

const CVDocument: React.FC<CVDocumentProps> = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header
        name={formData.name}
        title={formData.title}
        email={formData.email}
        phone={formData.phone}
        location={formData.location}
      />
      <About about={formData.about} />
      <Experience experience={formData.experience} />
      <Skills skills={formData.skills} />
      <Education education={formData.education} />
    </Page>
  </Document>
);

export default CVDocument;
