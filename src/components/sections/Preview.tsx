// src/components/Preview.tsx
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "@/components/PDFDocument";
import { Certificate, PDFDocumentProps } from "@/types";

interface KeyProject {
  title: string;
  role: string;
  objective: string;
  outcome: string;
}

const Preview = ({ data }: PDFDocumentProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 border border-neutral-100 sticky top-6">
      {/* Personal Info Section */}
      <div className="space-y-6">
        <div>
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-800">
                {data.personalInfo.name}
              </h1>
              <p className="text-xl">{data.personalInfo.title}</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-600">{data.personalInfo.education}</p>
              <p className="text-gray-600">
                Date of Birth: {data.personalInfo.dob}
              </p>
              <p className="text-gray-600">{data.personalInfo.email}</p>
            </div>
          </div>
        </div>
        <hr />

        {/* About Me Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">About Me</h2>
          <p className="text-gray-700">{data.aboutMe}</p>
        </div>
        <hr />

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <ul className="list-disc pl-5">
                <li key={index} className="text-gray-700">
                  {skill}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <hr />

        {/* Work Experience Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Work Experience
          </h2>
          <div className="space-y-8">
            {data.experience?.map((company, index) => (
              <div key={index} className="">
                {/* Company Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {company.name}
                  </h3>
                </div>

                {/* Positions */}
                <div className="space-y-6">
                  {company.positions?.map((position, posIndex) => (
                    <div key={posIndex} className="ml-4">
                      {/* Position Header */}
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-800">
                          {position.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {position.startDate} - {position.endDate}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      {position.responsibilities &&
                        position.responsibilities.length > 0 && (
                          <ul className="list-disc pl-5 space-y-1">
                            {position.responsibilities.map(
                              (responsibility, respIndex) => (
                                <li key={respIndex} className="text-gray-700">
                                  {responsibility}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Projects Section */}
      {data.keyProjects && data.keyProjects.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Key Projects
          </h2>
          <div className="space-y-6">
            {data.keyProjects.map((project: KeyProject, index: number) => (
              <div
                key={index}
                className="border-b border-gray-200 space-y-4 last:border-b-0"
              >
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <div className="space-y-1">
                  <p>
                    Role: <span className="text-gray-600">{project.role}</span>
                  </p>
                  <p>
                    Objective:{" "}
                    <span className="text-gray-600">{project.objective}</span>
                  </p>
                  <p>
                    Outcome:{" "}
                    <span className="text-gray-600">{project.outcome}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {data.certificates && data.certificates.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Certifications
          </h2>
          <div className="space-y-6">
            {data.certificates.map((project: Certificate, index: number) => (
              <div
                key={index}
                className="border-b border-gray-200 space-y-4 last:border-b-0"
              >
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p>Credentials: {project.credential}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* PDF Download Button */}

      <PDFDownloadLink
        document={<PDFDocument data={data} />}
        fileName={data.personalInfo.name.replace(/\s+/g, " ").toUpperCase()}
        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center block"
      >
        Download PDF
      </PDFDownloadLink>
    </div>
  );
};

export default Preview;
