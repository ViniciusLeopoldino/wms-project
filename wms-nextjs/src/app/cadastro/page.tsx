import { useState } from 'react';

export default function CadastroPage() {
  const [selectedEntity, setSelectedEntity] = useState('');

  const handleEntitySelect = (entity: string) => {
    setSelectedEntity(entity);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Cadastro</h1>

      <div className="flex space-x-4 mb-4">
        <button 
          onClick={() => handleEntitySelect('fiscal')}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
        >
          Fiscal
        </button>
        <button 
          onClick={() => handleEntitySelect('armazem')}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
        >
          Armazém
        </button>
        <button 
          onClick={() => handleEntitySelect('cliente')}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
        >
          Cliente
        </button>
        <button 
          onClick={() => handleEntitySelect('transportadora')}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
        >
          Transportadora
        </button>
      </div>

      {/* Formulário para Cadastro */}
      {selectedEntity && (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">{`Cadastrar ${selectedEntity.charAt(0).toUpperCase() + selectedEntity.slice(1)}`}</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder={`Digite o nome da ${selectedEntity}`}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                Contato
              </label>
              <input
                id="contact"
                type="text"
                placeholder="Digite o contato"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Cadastrar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
