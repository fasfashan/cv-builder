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
