// src/components/PersonalInfo.tsx

interface PersonalInfoProps {
  data: {
    education: string;
    name: string;
    title: string;
    email: string;
    dob: string;
  };
  onChange: (data: {
    education: string;
    name: string;
    title: string;
    email: string;
    dob: string;
  }) => void;
}

const PersonalInfo = ({ data, onChange }: PersonalInfoProps) => {
  const handleChange = (field: string, value: string) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6 p-8 border border-neutral-200 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Info</h2>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="John Doe"
          className="shadow appearance-none border rounded flex-1 py-2 px-3  text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline w-full"
        />
      </div>

      {/* Job Title Input */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Job Title
        </label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Software Engineer"
          className="shadow appearance-none border rounded flex-1 py-2 px-3  text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline w-full"
        />
      </div>

      {/* Education Input */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Education
        </label>
        <input
          type="text"
          value={data.education}
          onChange={(e) => handleChange("education", e.target.value)}
          placeholder="Bachelor of Computer Science"
          className="shadow appearance-none border rounded flex-1 py-2 px-3  text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline w-full"
        />
      </div>

      {/* Date of Birth Input */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          value={data.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
          className="shadow appearance-none border rounded flex-1 py-2 px-3  text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline w-full"
        />
      </div>

      {/* Email Input */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="john@example.com"
          className="shadow appearance-none border rounded flex-1 py-2 px-3  text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline w-full"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
