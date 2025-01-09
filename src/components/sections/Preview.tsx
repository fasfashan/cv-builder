// src/components/Preview.tsx
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "@/components/PDFDocument";
import { Certificate, PDFDocumentProps } from "@/types";

const Preview = ({ data }: PDFDocumentProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 border border-neutral-100 sticky top-6">
      {/* Personal Info Section */}
      <div className="space-y-6 ">
        <div className="pb-6 border-b border-gray-200">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-800">
                {data.personalInfo.name || "John Doe"}
              </h1>
              <p className="text-xl">
                {data.personalInfo.title || "Software Engineer"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-600">
                {data.personalInfo.education || "Universitas Indonesia"}
              </p>
              <p className="text-gray-600">
                Date of Birth:
                {data.personalInfo.dob
                  ? new Date(data.personalInfo.dob).toLocaleDateString("en-GB")
                  : "12-12-1990"}
              </p>
              <p className="text-gray-600">
                {data.personalInfo.email || "john@murni.co.id"}
              </p>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="pb-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">About Me</h2>
          <p className="text-gray-700">
            {data.aboutMe ||
              "Experienced and certified Project Manager with over 15 years of expertise in project management, procurement, and business operations. Skilled in leading large-scale infrastructure and application development projects across various industries, including finance, IT, and disaster recovery."}
          </p>
        </div>

        {/* Skills Section */}
        <div className="pb-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.length > 0 ? (
              data.skills.map((skill, index) => (
                <ul className="list-disc pl-5" key={index}>
                  <li className="text-gray-700">{skill}</li>
                </ul>
              ))
            ) : (
              <p className="text-gray-600">No skills added yet.</p>
            )}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="pb-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Work Experience
          </h2>
          <div className="space-y-8">
            {data.experience.length > 0 ? (
              data.experience.map((company, index) => (
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
              ))
            ) : (
              <p className="text-gray-600">No work experience added yet.</p>
            )}
          </div>
        </div>

        {/* Key Projects Section */}
        <div className="space-y-6 pb-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Key Projects
          </h2>
          <div className="space-y-6">
            {data.keyProjects.length > 0 ? (
              data.keyProjects.map((project: KeyProject, index: number) => (
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
                      Role:{" "}
                      <span className="text-gray-600">{project.role}</span>
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
              ))
            ) : (
              <p className="text-gray-600">No key projects added yet.</p>
            )}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="pb-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Certifications
          </h2>
          <div className="space-y-6">
            {data.certificates.length > 0 ? (
              data.certificates.map((project: Certificate, index: number) => (
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
              ))
            ) : (
              <p className="text-gray-600">No certifications added yet.</p>
            )}
          </div>
        </div>

        {/* Education Section */}
        <div className="pb-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Education Background
          </h2>
          <div className="space-y-6">
            {data.education.length > 0 ? (
              data.education.map((education, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 space-y-4 last:border-b-0"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {education.universityName}
                  </h3>
                  <p>
                    Degree:{" "}
                    <span className="text-gray-600">{education.major}</span>
                  </p>
                  <p>
                    GPA: <span className="text-gray-600">{education.gpa}</span>
                  </p>
                  <p>
                    Year of Graduation:{" "}
                    <span className="text-gray-600">
                      {education.graduationYear}
                    </span>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No education details added yet.</p>
            )}
          </div>
        </div>
      </div>

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

interface KeyProject {
  title: string;
  role: string;
  objective: string;
  outcome: string;
}

export default Preview;
