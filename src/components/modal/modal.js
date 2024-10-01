import React from 'react'
import ModalCard from './modalCard';
import { useState } from 'react';

export default function Modal({ buttonTitle, handleSubmit, children, onClose, openByTable, Title}) {
    const [isModalOpen, setIsModalOpen] = useState(openByTable || false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setIsModalOpen(false);
      };

    const handleSave = () => {
        if (handleSubmit) {
            handleSubmit();
        }
        handleCloseModal()
      };

  return (
      <>
            {!openByTable && (
                <button onClick={handleOpenModal} className="bg-secondary-light text-white px-4 py-1 rounded">
                    {buttonTitle || "Editar"}
                </button>
            )}
            <ModalCard
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={Title}
                onSubmit={handleSave}
            >
               {children}
        </ModalCard>
      </>
            
  )
}
