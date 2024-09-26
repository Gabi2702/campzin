import React from 'react';

export const Input = ({ setFormData, formData, label, placeholder, id, type }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 text-sm font-semibold text-gray-700">{label}</label>
      <input
        type={type || 'text'}
        value={formData[id] || ''}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};


