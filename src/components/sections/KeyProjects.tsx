// components/sections/KeyProjects.tsx

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
    <div className="space-y-6">
      {data.map((project, index) => (
        <div key={index} className="border rounded-lg p-4">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Project Title"
              value={project.title}
              onChange={(e) => updateProject(index, "title", e.target.value)}
              className="w-full p-2 border rounded"
            />

            <input
              type="text"
              placeholder="Role"
              value={project.role}
              onChange={(e) => updateProject(index, "role", e.target.value)}
              className="w-full p-2 border rounded"
            />

            <textarea
              placeholder="Objective"
              value={project.objective}
              onChange={(e) =>
                updateProject(index, "objective", e.target.value)
              }
              className="w-full p-2 border rounded h-24"
            />

            <textarea
              placeholder="Outcome"
              value={project.outcome}
              onChange={(e) => updateProject(index, "outcome", e.target.value)}
              className="w-full p-2 border rounded h-24"
            />
            <div className="flex justify-between items-center">
              <button
                onClick={() => deleteProject(index)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addProject}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Project
      </button>
    </div>
  );
};

export default KeyProjects;
