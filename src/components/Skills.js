// src/components/Skills.js
import React from 'react';

function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-b from-gray-100 to-gray-200 px-6 py-16">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Habilidades</h2>
        
        {/* Habilidades de Desenvolvedor */}
        <div className="mt-8">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Desenvolvedor</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <SkillCard title="Linguagens" skills="HTML5, CSS3, JavaScript" />
            <SkillCard title="Banco de Dados" skills="PostgreSQL, MySQL" />
            <SkillCard title="Frameworks e Bibliotecas" skills="React.js, Next.js, Node.js" />
            <SkillCard title="Ferramentas" skills="Git, AWS, Linux" />
            <SkillCard title="Versionamento" skills="Git (Controle de versões e releases)" />
            <SkillCard title="Boas Práticas" skills="SOLID, Clean Code" />
            <SkillCard title="APIs" skills="RESTful APIs" />
            <SkillCard title="Padrões de Design" skills="Escalabilidade e padrões de design" />
            <SkillCard title="Testes" skills="Unitários e funcionais (Jest)" />
          </div>
        </div>

        {/* Habilidades de Ciência de Dados */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Ciência de Dados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <SkillCard title="Análise de Dados" skills="Python, Excel, PySpark, SQL, Pandas, NumPy, ETL" />
            <SkillCard title="Machine Learning" skills="scikit-learn, TensorFlow, Keras, AutoML, redes neurais" />
            <SkillCard title="Visualização de Dados" skills="Power BI, Tableau, Matplotlib, Seaborn, Vega-Lite" />
            <SkillCard title="Bancos de Dados" skills="MySQL, PostgreSQL, MongoDB, SQL, NoSQL" />
            <SkillCard title="Big Data" skills="Apache Spark, Databricks" />
            <SkillCard title="Cloud Computing" skills="AWS, Docker" />
            <SkillCard title="Outras Tecnologias" skills="API Restful, Selenium (Web Scraping), Docker, Linux" />
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <SkillCard title="Metodologias Ágeis" skills="Scrum, Kanban, Jira" />
            <SkillCard title="Versionamento e Colaboração" skills="Git, GitHub, Bitbucket" />
            <SkillCard title="Comunicação" skills="Habilidade para comunicar ideias e resultados de forma clara e eficaz" />
            <SkillCard title="Trabalho em Equipe" skills="Colaboração com equipes multidisciplinares para alcançar metas comuns" />
            <SkillCard title="Adaptabilidade" skills="Capacidade de se adaptar rapidamente a novas ferramentas e tecnologias" />
            <SkillCard title="Resolução de Problemas" skills="Pensamento crítico e habilidades de resolução de problemas complexos" />
            <SkillCard title="Organização" skills="Gestão eficiente de tempo e organização para cumprir prazos" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, skills }) {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out border border-gray-200">
      <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{skills}</p>
    </div>
  );
}

export default Skills;
