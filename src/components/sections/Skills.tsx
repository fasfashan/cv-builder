import { useState } from "react";

// Definisikan tipe props yang diterima oleh komponen
interface SkillsProps {
  data: string[]; // Array of strings
  onChange: (skills: string[]) => void; // Fungsi untuk mengubah array skills
}

const Skills = ({ data, onChange }: SkillsProps) => {
  const [newSkill, setNewSkill] = useState<string>(""); // Tipe eksplisit untuk newSkill

  const addSkill = () => {
    // Pastikan bahwa newSkill tidak kosong atau hanya spasi
    if (newSkill.trim()) {
      // Menambahkan skill baru ke data dan memanggil onChange
      onChange([...data, newSkill.trim()]);
      setNewSkill(""); // Reset input setelah menambah skill
    }
  };

  const removeSkill = (index: number) => {
    // Menghapus skill berdasarkan index yang diberikan
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-6 p-8 border border-neutral-200 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Key Skills & Expertise
      </h2>
      <h2 className="text-sm font-bold mb-4">Skills</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)} // Memperbarui state newSkill
          className="shadow appearance-none border rounded flex-1 py-2 px-3  text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline"
          placeholder="Add a skill..."
        />
        <button
          onClick={addSkill} // Memanggil fungsi untuk menambahkan skill
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
              onClick={() => removeSkill(index)} // Memanggil removeSkill dengan index
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
