import React from 'react';
import profileImage from '../assets/profile.jpg';

function About() {
  return (
    <section id="about" className="bg-white px-4 py-16 text-black">
      <div className="max-w-screen-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-8">
        {/* Imagem de perfil */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <img
            src={profileImage}
            alt="Foto de perfil de Nathan Carlos"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto sobre mim */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-black">Sobre Mim</h2>
          <p className="mt-4 text-lg text-gray-700">
            Olá, sou Nathan Carlos, tenho 26 anos e moro em João Pessoa – PB. Formado em Ciência de Dados e Inteligência Artificial pela UFPB e pós‑graduando em Engenharia de Dados e IA, concentro minha carreira em análise e engenharia de dados: desenho e mantenho pipelines com Python e PySpark para processar milhões de registros, implementei na Zoox Smart Data automações de extração de dados da operadora Vivo, reduzindo em 70% o tempo de coleta, e na TNS Latam desenvolvi dashboards de geolocalização que diminuíram em 50% o tempo de identificação de falhas operacionais. Em seguida, aplico meus conhecimentos em desenvolvimento de software, criando APIs RESTful com Spring Boot e Node.js e interfaces responsivas com React.js e Next.js. Busco transformar dados em insights acionáveis e soluções práticas para desafios reais.
          </p>
          <ul className="mt-6">
            <li className="flex items-start gap-x-2">
              <span className="text-sm font-semibold text-black">Interesses:</span>
              <span className="text-sm text-gray-700">Análise de Dados, Computação em Nuvem, Desenvolvimento Web</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
