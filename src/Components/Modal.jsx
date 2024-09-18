import React from 'react'

const Modal = ({ children, onClose }) => {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white px-4 py-8 rounded shadow-lg">
          {children}
          <button className="ml-4 px-4 py-1 rounded-md bg-red-500 text-white hover:bg-red-700" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    );
  };

export default Modal


