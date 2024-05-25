import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded shadow-lg text-center">
        <p className="text-black">{message}</p>
        <button
          className="mt-4 bg-blue-500 text-white py-1 px-3 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
