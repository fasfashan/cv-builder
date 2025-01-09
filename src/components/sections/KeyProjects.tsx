import React, { useEffect } from "react";

interface Project {
  title: string;
  role: string;
  objective: string;
  outcome: string;
}

interface KeyProjectsProps {
  data: Project[];
  onChange: (data: Project[]) => void;
}

const KeyProjects: React.FC<KeyProjectsProps> = ({ data = [], onChange }) => {
  useEffect(() => {
    // Pastikan ada minimal satu proyek kosong saat pertama kali dirender
    if (data.length === 0) {
      onChange([
        {
          title: "",
          role: "",
          objective: "",
          outcome: "",
        },
      ]);
    }
  }, [data, onChange]);

  const addProject = () => {
    onChange([
      ...data,
      {
        title: "",
        role: "",
        objective: "",
        outcome: "",
      },
    ]);
  };

  const deleteProject = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    onChange(newData);
  };

  const updateProject = (
    index: number,
    field: keyof Project,
    value: string
  ) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      [field]: value,
    };
    onChange(newData);
  };

  return (
    <div className="space-y-6 p-8 border border-neutral-200 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Projects</h2>
      {data.map((project, index) => (
        <div key={index} className=" ">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Keyproject Title
              </label>
              <input
                type="text"
                placeholder="SmartGateway Application (Bank Panin & Mizuho)
"
                value={project.title}
                onChange={(e) => updateProject(index, "title", e.target.value)}
                className="shadow appearance-none border rounded flex-1 py-2 px-3  text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Role
              </label>
              <input
                type="text"
                placeholder="Project Manager"
                value={project.role}
                onChange={(e) => updateProject(index, "role", e.target.value)}
                className="shadow appearance-none border rounded flex-1 py-2 px-3  text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Objective
              </label>
              <input
                type="text"
                placeholder="Objective"
                value={project.objective}
                onChange={(e) =>
                  updateProject(index, "objective", e.target.value)
                }
                className="shadow appearance-none border rounded flex-1 py-2 px-3  text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Outcome
              </label>
              <input
                type="text"
                placeholder="Outcome"
                value={project.outcome}
                onChange={(e) =>
                  updateProject(index, "outcome", e.target.value)
                }
                className="shadow appearance-none border rounded flex-1 py-2 px-3  text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline w-full"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => deleteProject(index)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
            <hr />
          </div>
        </div>
      ))}

      <button
        onClick={addProject}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add another key project
      </button>
    </div>
  );
};

export default KeyProjects;
