import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div>
      <div className="w-full mt-10 h-[750px]" >
        <div className="bg-blue-900 w-full flex items-center rounded-t-lg">
          <div 
            className={`ml-[65px] mt-20 0 w-60 h-40 bg-gray-200 flex justify-center items-center rounded-lg transition-all duration-300 ${isHovered ? 'shadow-2xl -translate-y-2' : ''}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img
              src="/SINARES.png"
              alt="sinares"
            />
          </div>
          <div className='ml-[200px] mb-10 mt-11'>
            <h1 className="text-6xl text-white">SINARES SARL</h1>
            <div className="flex mt-4 space-x-4 ml-28">
              <a href="#"><FaTwitter className="text-3xl  rounded-full bg-white p-2" /></a>
              <a href="#"><FaFacebook className="text-3xl rounded-full bg-white p-2" /></a>
              <a href="#"><FaInstagram className="text-3xl rounded-full bg-white p-2" /></a>
              <a href="#"><FaLinkedin className="text-3xl rounded-full bg-white p-2"/></a>
              <a href="#"><FaYoutube className="text-3xl rounded-full bg-white p-2"/></a>
            </div>
          </div>
        </div>
        <div className="bg-white  flex rounded-b-lg">
          <div className='ml-16 mb-16'>
            <h2 className="text-2xl font-semibold mt-10">About Us</h2>
            <p className="mt-2 w-1/2 ">
              SINARES est la société de référence d'intégration OpenSource 
              et de fourniture des services et biens informatiques depuis 2018.
            </p>
          </div>
          <div className='mt-8 w-3/4'>
            <ul>
              <li><strong className='mr-14'>Adresse:</strong> Yaoundé, Cameroun</li>
              <li><strong className='mr-10'>Téléphone:</strong> +237 674 09 32 53</li>
              <li><strong className='mr-20'>Email:</strong> conctact@sinares.com</li>
              <div className='flex mt-10'>
                <button className='mr-10 rounded-lg bg-blue-900 p-4  hover:bg-blue-400 text-white '>Nos Références</button>
                <button className='ml-10 border rounded-none border-cyan-700 px-10 py-15 hover:bg-blue-900 '>Le PDG</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-slate-600 mt-8">
        © 2024 All rights reserved. Sinares Sarl
      </div>
    </div>
  );
};

export default Home;