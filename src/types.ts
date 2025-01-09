// @/types/index.ts or @/types.ts

export interface Position {
  title: string;
  startDate: string;
  endDate: string;
  responsibilities: string[]; // Memastikan selalu berupa array
}

export interface Company {
  name: string;
  positions: Position[]; // Mengharuskan array berisi objek Position
}

// src/types.ts
export interface PDFDocumentProps {
  data: {
    personalInfo: {
      name: string;
      title: string;
      email: string;
      dob: string;
      education: string;
    };
    aboutMe: string;
    skills: string[];
    experience: {
      name: string;
      positions: {
        title: string;
        startDate: string;
        endDate: string;
        responsibilities?: string[];
      }[];
    }[];
    keyProjects: {
      title: string;
      role: string;
      objective: string;
      outcome: string;
    }[];
    certificates: Certificate[];
    education: {
      universityName: string;
      gpa: string;
      major: string;
      graduationYear: string;
    }[];
  };
}
export interface Certificate {
  title: string;
  credential: string;
}
