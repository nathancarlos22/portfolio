import React from 'react';

function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-b from-gray-100 to-gray-200 px-6 py-16">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Habilidades</h2>

        {/* Análise & Engenharia de Dados */}
        <div className="mt-8">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Análise & Engenharia de Dados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Análise de Dados" skills="Python (Pandas, NumPy), SQL, Excel, PySpark, ETL" />
            <SkillCard title="Machine Learning" skills="scikit-learn, TensorFlow, Keras, AutoML, Redes Neurais" />
            <SkillCard title="Visualização" skills="Power BI, Tableau, Matplotlib, Vega-Lite" />
            <SkillCard title="Big Data" skills="Apache Spark, Databricks, PySpark" />
            <SkillCard title="Bancos de Dados" skills="MongoDB, PostgreSQL, MySQL, NoSQL" />
            <SkillCard title="Cloud & DevOps" skills="AWS, Docker, Jenkins, CI/CD" />
          </div>
        </div>

        {/* Desenvolvimento Web & APIs */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Desenvolvimento Web & APIs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Front-End" skills="HTML5, CSS3, JavaScript, React.js, Next.js" />
            <SkillCard title="Back-End" skills="Node.js, Express, Spring Boot, RESTful APIs" />
            <SkillCard title="Versionamento" skills="Git, GitHub, Bitbucket" />
            <SkillCard title="Acessibilidade" skills="WCAG, práticas de UX" />
            <SkillCard title="Testes" skills="Jest, React Testing Library, Cypress" />
            <SkillCard title="Monitoramento" skills="Tailwind CSS, Styled Components, Storybook" />
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Comunicação" skills="Clara e objetiva na apresentação de resultados" />
            <SkillCard title="Trabalho em Equipe" skills="Colaboração multidisciplinar em Scrum" />
            <SkillCard title="Adaptabilidade" skills="Rapidez no aprendizado de novas ferramentas" />
            <SkillCard title="Resolução de Problemas" skills="Análise crítica e soluções criativas" />
            <SkillCard title="Organização" skills="Gestão de tempo e prioridades" />
            <SkillCard title="Agilidade" skills="Scrum, Kanban, planejamento de sprints" />
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
