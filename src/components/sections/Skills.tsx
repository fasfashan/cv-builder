// src/components/Skills.tsx
import { useState } from "react";
interface SkillsProps {
  data: string[];
  onChange: (skills: string[]) => void;
}

const Skills = ({ data, onChange }: SkillsProps) => {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim()) {
      onChange([...data, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="shadow appearance-none border rounded flex-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Add a skill..."
        />
        <button
          onClick={addSkill}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {data.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-2 text-sm border border-neutral-100  flex items-center gap-2"
          >
            {skill}
            <button
              onClick={() => removeSkill(index)}
              className="text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
