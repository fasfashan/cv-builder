// src/components/PersonalInfo.tsx

interface PersonalInfoProps {
  data: {
    photo: string | null;
    education: string;
    name: string;
    title: string;
    email: string;
    dob: string;
  };
  onChange: (data: {
    photo: string | null;
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
    <div className="space-y-6">
      {/* Name Input */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="John Doe"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
