import React, { useState, useEffect } from 'react';
import AddServiceForm from './AddServiceForm';
import { BiPlusCircle } from 'react-icons/bi';
import Modal from './Modal';

const Service = () => {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Charger les services depuis JSON Server lors du montage du composant
  useEffect(() => {
    fetch('http://localhost:3001/services')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const addService = (newService) => {
    fetch('http://localhost:3001/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newService),
    })
    .then(response => response.json())
    .then(data => setServices([...services, data]))
    .catch(error => console.error('Error adding service:', error));

    setIsModalOpen(false); // Fermer le modal après ajout
  };

  const handlePlusClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container mt-10">
      <div className='bg-blue-900 rounded-t-lg w-full h-[150px] text-center pt-8'>
        <h2 className="text-6xl text-white">
          Our Services
          <BiPlusCircle
            className="inline-block float-right text-2xl cursor-pointer hover:text-blue-500"
            onClick={handlePlusClick}
          />
        </h2>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <AddServiceForm onAddService={addService} />
        </Modal>
      )}

      <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-4 rounded-b-lg pt-6 px-6 pb-10 max-h-[550px]">
        {services.map((service) => (
          <div key={service.id} className="bg-slate-200 p-4 rounded shadow border-l-4 border-blue-950 hover:shadow-black">
            <h3 className="text-xl font-bold">{service.name}</h3>
            <p className="text-gray-600">{service.year} | {service.description} | {service.link}</p>
          </div>
        ))}
      </div>
      <div className="text-center text-slate-600 mt-8">
        © 2024 All rights reserved. Sinares Sarl
      </div>
    </div>
  );
};

export default Service;
