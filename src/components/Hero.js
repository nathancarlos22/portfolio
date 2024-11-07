// src/components/Hero.js
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Hero() {
  return (
    <section
      id="hero"
      className="flex h-screen items-center justify-center bg-black text-center text-white"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
          Olá, eu sou <span className="text-gray-200">Nathan Carlos</span> 👋
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400">Cientista de Dados e Desenvolvedor</p>

        {/* Seção de Navegação */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="#about" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out no-underline shadow-md">
            Sobre Mim
          </a>
          <a href="#education" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out no-underline shadow-md">
            Formação Acadêmica
          </a>
          <a href="#experience" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out no-underline shadow-md">
            Experiência Profissional
          </a>
          <a href="#skills" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out no-underline shadow-md">
            Habilidades
          </a>
        </div>

        {/* Botões adicionais (Projetos e Contato) */}
        <div className="flex justify-center gap-4 mb-4">
          <a href="#projects" className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out no-underline shadow-md">
            Meus Projetos
          </a>
          <a href="#contact" className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out no-underline shadow-md">
            Contato
          </a>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.linkedin.com/in/nathan-carlos" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out">
            <FaLinkedin size={32} />
          </a>
          <a href="https://github.com/nathancarlos22" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out">
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
