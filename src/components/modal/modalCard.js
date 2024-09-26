import React from 'react';
import { X } from 'lucide-react'; // Ícone de fechar

const ModalCard = ({ isOpen, onClose, title, children, onSubmit }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-primary-light rounded-lg shadow-lg p-6 w-11/12 md:w-1/3 z-50">
        <button
          className="absolute top-2 right-2 text-secondary-dark hover:text-white mt-4 mr-4"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
        <div>{children}</div>
        <div className="flex justify-end mt-4">
          <button className="bg-secondary-light text-white px-4 py-2 rounded" onClick={onSubmit}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
