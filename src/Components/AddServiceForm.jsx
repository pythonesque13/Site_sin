import React, { useState } from 'react';

const AddServiceForm = ({ onAddService }) => {
  const [serviceName, setServiceName] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddService({
      name: serviceName,
      year: year,
      description: description,
      link: link,
    });

    // Clear form fields
    setServiceName('');
    setYear('');
    setDescription('');
    setLink('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input
        type="text"
        value={serviceName}
        onChange={(e) => setServiceName(e.target.value)}
        placeholder="Service Name"
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Link"
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <button type="submit" className="float-right mt-4 p-2 bg-blue-500 text-white rounded">Add Service</button>
    </form>
  );
};

export default AddServiceForm;
