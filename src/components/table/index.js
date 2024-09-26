import { Settings, X } from 'lucide-react';
import React, { useState } from 'react';
import Modal from '../modal/modal';

const Table = ({ collumns, data, mapping, showButtons = false, FormChildren }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null);  

  const handleEditButton = (linha) => {
    setSelectedRow(linha);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    console.log('Salvar dados:', selectedRow);
    setIsModalOpen(false);
  };

  const handleSubmitDelete = () => {
    console.log("linha deletada", selectedRow)
    setIsModalOpenDelete(false)
  }

  const resetForm = () => {
    setSelectedRow(null); 
    setIsModalOpen(false);
  };

  const handleDelete = (linha)=>{
    setSelectedRow(linha);
    setIsModalOpenDelete(true)
  }

  const onCloseDelete = ()=>{
    setIsModalOpenDelete(false)
  }

  return (
    <div className="p-4 mb-2">
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse rounded-lg shadow-md">
        <thead>
          <tr>
            {collumns.map((coluna, index) => (
              <th
                key={index}
                className={`px-4 py-2 text-center bg-gray-600 text-white ${index === 0 ? 'rounded-tl-lg' : ''} ${showButtons && index === collumns.length ? 'rounded-tr-lg' : ''}`}
              >
                {coluna}
              </th>
            ))}
            {showButtons && (
              <th className="px-4 py-2 text-center bg-gray-600 text-white rounded-tr-lg"></th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((linha, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-700'}>
              {collumns.map((coluna, idx) => (
                <td key={idx} className="px-4 py-2 text-center text-white">
                  {linha[mapping[coluna]] || 'N/A'}
                </td>
              ))}
              {showButtons && (
                <td className="text-center w-[5%]">
                  <button className="text-white" onClick={() => handleEditButton(linha)}>
                    <Settings />
                  </button>
                  <button className="text-white ml-2" onClick={() => handleDelete(linha.id)}>
                    <X />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpenDelete && (
        <Modal handleSubmit={handleSubmitDelete} onClose={onCloseDelete} openByTable={isModalOpenDelete}>
          <p>Tem certeza que deseja excluir: {selectedRow}</p>
        </Modal>
      )}

      {isModalOpen && (
        <Modal handleSubmit={handleSubmit} onClose={resetForm} openByTable={isModalOpen}>
          {FormChildren && React.cloneElement(FormChildren, { formData: selectedRow, setFormData: setSelectedRow })}
        </Modal>
      )}
    </div>
  </div>
  );
};

export default Table;
