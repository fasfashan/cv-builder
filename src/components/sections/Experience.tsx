import React, { useState } from "react";

interface Position {
  title: string;
  startDate: string;
  endDate: string;
  responsibilities?: string[];
}

interface Company {
  name: string;
  positions: Position[];
}

interface ExperienceProps {
  data: Company[];
  onChange: (data: Company[]) => void;
}

const Experience: React.FC<ExperienceProps> = ({ data, onChange }) => {
  const [newCompany, setNewCompany] = useState("");
  const [newResponsibilityMap, setNewResponsibilityMap] = useState<{
    [key: string]: string;
  }>({});

  const addCompany = () => {
    if (newCompany.trim()) {
      onChange([
        ...data,
        {
          name: newCompany,
          positions: [],
        },
      ]);
      setNewCompany("");
    }
  };

  const removeCompany = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    onChange(newData);
  };

  const addPosition = (companyIndex: number) => {
    const newData = [...data];
    newData[companyIndex].positions.push({
      title: "",
      startDate: "",
      endDate: "",
      responsibilities: [],
    });
    onChange(newData);
  };

  const removePosition = (companyIndex: number, positionIndex: number) => {
    const newData = [...data];
    newData[companyIndex].positions.splice(positionIndex, 1);
    onChange(newData);
  };

  const updatePosition = (
    companyIndex: number,
    positionIndex: number,
    field: keyof Position,
    value: string
  ) => {
    const newData = [...data];

    if (field === "responsibilities") {
      newData[companyIndex].positions[positionIndex][field] = [value];
    } else {
      newData[companyIndex].positions[positionIndex][field] = value;
    }

    onChange(newData);
  };

  const handleResponsibilityChange = (
    companyIndex: number,
    positionIndex: number,
    value: string
  ) => {
    setNewResponsibilityMap((prevState) => ({
      ...prevState,
      [`${companyIndex}-${positionIndex}`]: value,
    }));
  };

  const addResponsibility = (companyIndex: number, positionIndex: number) => {
    const responsibility =
      newResponsibilityMap[`${companyIndex}-${positionIndex}`];
    if (responsibility.trim()) {
      const newData = [...data];
      newData[companyIndex].positions[positionIndex].responsibilities?.push(
        responsibility
      );
      onChange(newData);
      setNewResponsibilityMap((prevState) => ({
        ...prevState,
        [`${companyIndex}-${positionIndex}`]: "", // reset input after adding
      }));
    }
  };

  const removeResponsibility = (
    companyIndex: number,
    positionIndex: number,
    respIndex: number
  ) => {
    const newData = [...data];
    newData[companyIndex].positions[positionIndex].responsibilities?.splice(
      respIndex,
      1
    );
    onChange(newData);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <input
          required
          type="text"
          placeholder="Add company"
          value={newCompany}
          onChange={(e) => setNewCompany(e.target.value)}
          className="flex-1 p-2 border rounded"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addCompany();
            }
          }}
        />
        <button
          onClick={addCompany}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Company
        </button>
      </div>

      {data.map((company, companyIndex) => (
        <div key={companyIndex} className="border p-4 rounded">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{company.name}</h3>
            <div className="space-x-2">
              <button
                onClick={() => addPosition(companyIndex)}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Add Position
              </button>
              <button
                onClick={() => removeCompany(companyIndex)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Remove Company
              </button>
            </div>
          </div>

          {company.positions.map((position, posIndex) => (
            <div key={posIndex} className="ml-4 p-4 border-l-2">
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Position Title"
                  value={position.title}
                  onChange={(e) =>
                    updatePosition(
                      companyIndex,
                      posIndex,
                      "title",
                      e.target.value
                    )
                  }
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  value={position.startDate}
                  onChange={(e) =>
                    updatePosition(
                      companyIndex,
                      posIndex,
                      "startDate",
                      e.target.value
                    )
                  }
                  className="p-2 border rounded"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={position.endDate}
                    onChange={(e) =>
                      updatePosition(
                        companyIndex,
                        posIndex,
                        "endDate",
                        e.target.value
                      )
                    }
                    className="p-2 border rounded flex-1"
                  />
                  <button
                    onClick={() => removePosition(companyIndex, posIndex)}
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
              </div>

              {/* Responsibilities */}
              <div className="mt-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add responsibility"
                    value={
                      newResponsibilityMap[`${companyIndex}-${posIndex}`] || ""
                    }
                    onChange={(e) =>
                      handleResponsibilityChange(
                        companyIndex,
                        posIndex,
                        e.target.value
                      )
                    }
                    className="flex-1 p-2 border rounded"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        addResponsibility(companyIndex, posIndex);
                      }
                    }}
                  />
                  <button
                    onClick={() => addResponsibility(companyIndex, posIndex)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Add
                  </button>
                </div>
                <ul className="list-disc ml-5 mt-2">
                  {position.responsibilities?.map((resp, respIndex) => (
                    <li
                      key={respIndex}
                      className="flex justify-between items-center"
                    >
                      <span>{resp}</span>
                      <button
                        onClick={() =>
                          removeResponsibility(
                            companyIndex,
                            posIndex,
                            respIndex
                          )
                        }
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Experience;
