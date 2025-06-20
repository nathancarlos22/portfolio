import React from 'react';

function Education() {
  return (
    <section id="education" className="bg-gray-100 px-4 py-16">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-black">Formação Acadêmica</h2>
        <div className="mt-6 space-y-6">
          {/* Pós-graduação */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
            <h3 className="text-lg font-semibold text-black">
              Pós-graduação em Engenharia de Dados e IA
            </h3>
            <p className="mt-1 text-gray-700">
              UFPB – Universidade Federal da Paraíba | Início em Ago/2024 (em andamento)
            </p>
          </div>
          {/* Graduação */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
            <h3 className="text-lg font-semibold text-black">
              Bacharelado em Ciência de Dados e Inteligência Artificial
            </h3>
            <p className="mt-1 text-gray-700">
              UFPB – Universidade Federal da Paraíba | Concluído em Jul/2024
            </p>
          </div>
          {/* Certificação */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
            <h3 className="text-lg font-semibold text-black">
              AWS Cloud Practitioner Essentials
            </h3>
            <p className="mt-1 text-gray-700">
              AWS Training & Certification | Concluído em 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
