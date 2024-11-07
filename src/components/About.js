// src/components/About.js
import React from 'react';
import profileImage from '../assets/profile.jpg';

function About() {
  return (
    <section id="about" className="bg-white px-4 py-16 text-black">
      <div className="max-w-screen-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-8">
        
        {/* Imagem de perfil ajustada */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <img src={profileImage} alt="Minha foto de perfil" className="w-full h-full object-cover" />
        </div>

        {/* Texto sobre mim */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-black">Sobre Mim</h2>
          <p className="mt-4 text-lg text-gray-700">
            Brasileiro, solteiro, 25 anos, residente em João Pessoa – PB. 
            Com bacharelado em Ciência de Dados e Inteligência Artificial pela Universidade Federal da Paraíba, com uma paixão crescente por explorar o mundo da tecnologia e aplicar técnicas de programação, análise de dados e desenvolvimento. Ao longo da minha jornada, desenvolvi uma variedade de habilidades e técnicas focadas nessas tecnologias, sempre buscando transformar números em insights importantes.
            Atualmente explorando novas tecnologias em Inteligência Artificial e criando artigos e projetos explorando técnicas nas minhas áreas de atuação (Análise de dados e Desenvolvimento).
          </p>
          <ul className="mt-6">
            <li className="flex items-start gap-x-2">
              <span className="text-sm font-bold text-black">Interesses:</span>
              <span className="text-sm text-gray-700">Tecnologia, Ciência de Dados, Desenvolvimento</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
