// src/components/Experience.js
import React from 'react';

function Experience() {
  return (
    <section id="experience" className="bg-gray-900 px-4 py-16 text-white">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold">Experiência Profissional</h2>

        <div className="mt-6 bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold">Analista de Dados e Desenvolvedor</h3>
          <p className="text-gray-400">Jan/2023 - Jul/2024</p>
          <ul className="mt-2 list-disc list-inside text-gray-300">
            <li>Análise de dados de geolocalização para desenvolver um dashboard utilizando React.js, Next.js com backend Java;</li>
            <li>Elaboração de uma base de dados utilizando MongoDB para análise que comporte uma grande variedade de dados;</li>
            <li>Criação de um servidor em Python que intermedia os dados para pré-processamento, agilizando o processo de ETL de dados;</li>
            <li>Uso do PySpark para agilizar processos no dataframe;</li>
            <li>Elaboração de relatórios mensais para o andamento da aplicação;</li>
            <li>Documentação eficiente de APIs para facilitar o entendimento e a integração por parte de outros desenvolvedores;</li>
            <li>Utilização de sistemas de controle de versão para rastrear alterações no código;</li>
            <li>Entendimento de gerenciamento de projetos ágeis, Scrum.</li>
          </ul>
        </div>

        <div className="mt-6 bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold">Estagiário Front-End Developer</h3>
          <p className="text-gray-400">Out/2022 - Abr/2022</p>
          <ul className="mt-2 list-disc list-inside text-gray-300">
            <li>Elaboração de componentes em React.js com back-end Java, Node.js, Postgres e SQL para criação de um sistema de matrículas para o Governo do Estado da Paraíba que auxiliou inúmeras pessoas no período da pandemia;</li>
            <li>Criação e implementação de interfaces de usuário responsivas e acessíveis utilizando HTML, CSS e JavaScript;</li>
            <li>Entendimento de gerenciamento de projetos ágeis, Scrum;</li>
            <li>Participações de reuniões semanais.</li>
          </ul>

        </div>
      </div>
    </section>
  );
}

export default Experience;
