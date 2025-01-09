// Interfaces
import { useState } from "react";
interface Certificate {
  title: string;
  credential: string;
}

interface CertificateProps {
  data: Certificate[];
  onChange: (data: Certificate[]) => void;
}

// Component
const Certificates: React.FC<CertificateProps> = ({ data, onChange }) => {
  const [newCertificate, setNewCertificate] = useState({
    title: "",
    credential: "",
  });

  const addCertificate = () => {
    if (newCertificate.title.trim()) {
      onChange([...data, newCertificate]);
      setNewCertificate({ title: "", credential: "" });
    }
  };

  const removeCertificate = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    onChange(newData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Certificates</h2>

      {/* Form untuk menambah sertifikat baru */}
      <div className="p-4 bg-white rounded-lg shadow">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Certificate Title"
            value={newCertificate.title}
            onChange={(e) =>
              setNewCertificate({ ...newCertificate, title: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Credential ID"
            value={newCertificate.credential}
            onChange={(e) =>
              setNewCertificate({
                ...newCertificate,
                credential: e.target.value,
              })
            }
            className="p-2 border rounded"
          />
        </div>
        <button
          onClick={addCertificate}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Certificate
        </button>
      </div>

      {/* List sertifikat yang sudah ditambahkan */}
      <div className="space-y-4">
        {data.map((cert, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-gray-800">{cert.title}</h3>
              <p className="text-gray-600 text-sm">
                Credential: {cert.credential}
              </p>
            </div>
            <button
              onClick={() => removeCertificate(index)}
              className="p-2 text-red-500 hover:text-red-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
