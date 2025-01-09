import React, { useState } from "react";

interface Education {
  universityName: string;
  gpa: string;
  graduationYear: string;
  major: string;
}

interface EducationalBackgroundProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

const EducationalBackground: React.FC<EducationalBackgroundProps> = ({
  data,
  onChange,
}) => {
  const [newUniversityName, setNewUniversityName] = useState("");
  const [newGpa, setNewGpa] = useState("");
  const [newGraduationYear, setNewGraduationYear] = useState("");
  const [newMajor, setMajor] = useState("");

  const addEducation = () => {
    if (newUniversityName.trim() && newGpa.trim()) {
      onChange([
        ...data,
        {
          universityName: newUniversityName,
          gpa: newGpa,
          graduationYear: newGraduationYear,
          major: newMajor,
        },
      ]);
      setNewUniversityName("");
      setNewGpa("");
    }
  };

  const removeEducation = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    onChange(newData);
  };

  return (
    <div className="space-y-6 p-8 border border-neutral-200 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Educational Background
      </h2>
      <div className="flex flex-col space-y-4 items-end gap-2">
        <div className="flex flex-col w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            University Name
          </label>
          <input
            required
            type="text"
            placeholder="University Name"
            value={newUniversityName}
            onChange={(e) => setNewUniversityName(e.target.value)}
            className="shadow appearance-none border rounded flex-1 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            GPA
          </label>
          <input
            required
            type="text"
            placeholder="GPA"
            value={newGpa}
            onChange={(e) => setNewGpa(e.target.value)}
            className="shadow appearance-none border rounded flex-1 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Graduation
          </label>
          <input
            required
            type="text"
            placeholder="Graduation Year"
            value={newGraduationYear}
            onChange={(e) => setNewGraduationYear(e.target.value)}
            className="shadow appearance-none border rounded flex-1 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Major
          </label>
          <input
            required
            type="text"
            placeholder="Major"
            value={newMajor}
            onChange={(e) => setMajor(e.target.value)}
            className="shadow appearance-none border rounded flex-1 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline"
          />
        </div>
        <button
          onClick={addEducation}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>

      {data.map((education, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-4 mt-8"
        >
          <div>
            <h3 className="text-lg font-semibold">
              {education.universityName}
            </h3>
            <p>GPA: {education.gpa}</p>
          </div>
          <button
            onClick={() => removeEducation(index)}
            className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default EducationalBackground;
