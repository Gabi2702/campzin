import React from 'react'
import ModalCard from './modalCard';
import { useState } from 'react';
import ButtonClick from '../button/buttonClick';

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
                <ButtonClick onClick={handleOpenModal} Title={buttonTitle || "Editar"} className="bg-secondary-light text-white px-4 py-1 rounded" />
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
