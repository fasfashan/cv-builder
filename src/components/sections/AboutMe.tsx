// src/components/AboutMe.tsx
interface AboutMeProps {
  data: string;
  onChange: (text: string) => void;
}

const AboutMe = ({ data, onChange }: AboutMeProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">About Me</h2>
      <textarea
        value={data}
        onChange={(e) => onChange(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
        placeholder="Write about yourself..."
      />
    </div>
  );
};

export default AboutMe;
