// pages/cv.tsx atau components/CVBuilder.tsx
import { useState } from "react";
import { PDFPreview, DownloadPDF } from "@/utils/pdf";
import type { CVData } from "@/components/CVDocument";

const CVPage = () => {
  const [formData, setFormData] = useState<CVData>({
    name: "John Doe",
    title: "Software Engineer",
    email: "john@example.com",
    phone: "+1234567890",
    location: "New York, USA",
    about: "Experienced software engineer...",
    experience: [
      {
        company: "Tech Corp",
        positions: [
          {
            title: "Senior Developer",
            duration: "2020 - Present",
            description: "Leading development team...",
          },
        ],
      },
    ],
  });

  return (
    <div className="container mx-auto p-4">
      <PDFPreview formData={formData} />
      <div className="mt-4">
        <DownloadPDF formData={formData} />
      </div>
    </div>
  );
};

export default CVPage;
