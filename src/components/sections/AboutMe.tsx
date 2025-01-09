// src/components/AboutMe.tsx
interface AboutMeProps {
  data: string;
  onChange: (text: string) => void;
}

const AboutMe = ({ data, onChange }: AboutMeProps) => {
  return (
    <div className="mb-6 p-8 border border-neutral-200 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About you</h2>

      <textarea
        value={data}
        onChange={(e) => onChange(e.target.value)}
        className="shadow appearance-none border rounded flex-1 py-2 px-3  text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline h-32 w-full"
        placeholder="Write about yourself..."
      />
    </div>
  );
};

export default AboutMe;
