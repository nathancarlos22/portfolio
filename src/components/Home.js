import React from 'react';

function Experience() {
  return (
    <section id="experience" className="bg-gray-900 px-4 py-16 text-white">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold">Experiência Profissional</h2>

        {/* Zoox Smart Data */}
        <div className="mt-6 bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold">Zoox Smart Data | Analista de Dados</h3>
          <p className="text-gray-400">Fev/2025 – Mai/2025</p>
          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Análise de grandes volumes de dados com Python (Pandas) e Excel, utilizando bases de fornecedores como Assertiva, Boa Vista e Big Data Corp.</li>
            <li>Criação de pipelines em Python para tratamento, padronização e enriquecimento de dados (deduplicação, geolocalização, score de qualidade).</li>
            <li>Extração automatizada via web scraping (Selenium) para consolidar nomes de operadoras, reduzindo em 70% o tempo de coleta e aumentando a acurácia dos relatórios.</li>
            <li>Proposta e implementação de melhorias na infraestrutura MongoDB, aumentando em 60% a veracidade dos dados e otimizando a armazenagem.</li>
            <li>Integração com APIs externas (Google Serper) para validação de dados de localização.</li>
            <li>Geração de insights em Python e Excel para apoiar decisões de negócio.</li>
            <li>Atuação em times ágeis com dailies, sprints e reuniões via Jira, Google Chat e Microsoft Teams.</li>
          </ul>
        </div>

        {/* TNS Latam */}
        <div className="mt-6 bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold">TNS Latam | Analista de Dados & Desenvolvedor</h3>
          <p className="text-gray-400">Jan/2023 – Jul/2024</p>
          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Desenvolvi pipelines ETL em Python e PySpark para processar e analisar grandes volumes de dados, garantindo qualidade e escalabilidade.</li>
            <li>Modelei coleções MongoDB e escrevi consultas analíticas de alto desempenho.</li>
            <li>Projetei dashboards de geolocalização com React.js, Next.js e Spring Boot, reduzindo em 50% o tempo de identificação de falhas operacionais.</li>
            <li>Realizei análises de performance de dados com Apache Spark e Python.</li>
            <li>Implementei APIs RESTful em Spring Boot e criei componentes frontend em React.js/Next.js, seguindo boas práticas de UX e acessibilidade.</li>
            <li>Documentei endpoints, escrevi testes automatizados e gerenciei pipelines de CI/CD com Git e Jenkins.</li>
            <li>Trabalhei em ambiente Scrum, participando de cerimônias diárias, planejamento de sprints e retrospectivas.</li>
          </ul>
        </div>

        {/* UFPB/SEECT-FAPESQ */}
        <div className="mt-6 bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold">UFPB/SEECT-FAPESQ | Estagiário Front-End Developer</h3>
          <p className="text-gray-400">Mar/2021 – Ago/2022</p>
          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Modelagem de dados e integração com PostgreSQL para plataforma de pré-matrícula digital.</li>
            <li>Desenvolvi componentes em React.js/Next.js integrados a APIs RESTful em Node.js e TypeScript.</li>
            <li>Implementei interfaces acessíveis com HTML5, CSS3 e Tailwind CSS, garantindo compatibilidade cross-browser.</li>
            <li>Colaborei em squad ágil, participando de planning, dailies e refinamento de backlog.</li>
            <li>Conduzi testes de usabilidade e documentação de fluxos, reduzindo o tempo de cadastro e melhorando a experiência dos estudantes.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
