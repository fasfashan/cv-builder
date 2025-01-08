export interface Position {
  title: string;
  duration: string;
  description: string;
}

export interface WorkExperience {
  company: string;
  totalDuration: string;
  positions: Position[];
}

export interface CVData {
  name: string;
  title: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  website: string;
  aboutMe: string;
  keySkills: string[];
  workExperience: WorkExperience[];
}
