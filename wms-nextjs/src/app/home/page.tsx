import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menu Lateral */}
      <div className={`fixed inset-y-0 left-0 bg-white w-64 shadow-lg transition-transform ${isMenuOpen ? 'transform-none' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-500 focus:outline-none">
            &times;
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="p-4 hover:bg-gray-200">
              <a href="/home">Home</a>
            </li>
            <li className="p-4 hover:bg-gray-200 cursor-pointer" onClick={() => alert('Abrir Cadastro')}>
              Cadastro
            </li>
            <li className="p-4 hover:bg-gray-200 cursor-pointer" onClick={() => alert('Abrir Recebimento')}>
              Recebimento
            </li>
            <li className="p-4 hover:bg-gray-200 cursor-pointer" onClick={() => alert('Abrir Expedição')}>
              Expedição
            </li>
            <li className="p-4 hover:bg-gray-200 cursor-pointer" onClick={() => alert('Consultar Estoque')}>
              Estoque
            </li>
            <li className="p-4 hover:bg-gray-200">
              <a href="/auth/login">Sair</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Botão para abrir o menu */}
      <button className="bg-indigo-600 text-white p-2 rounded-lg m-4" onClick={() => setIsMenuOpen(true)}>
        Menu
      </button>

      {/* Conteúdo Principal */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold">Bem-vindo ao WMS!</h1>
        <p className="mt-4 text-gray-700">
          Aqui é o espaço para o conteúdo principal. <br />
          (Você pode adicionar um "Sobre Nós" ou qualquer outra informação relevante aqui.)
        </p>
      </div>
    </div>
  );
}
