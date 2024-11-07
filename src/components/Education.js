// src/components/Education.js
import React from 'react';

function Education() {
  return (
    <section id="education" className="bg-gray-100 px-4 py-16">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-black">Formação Acadêmica</h2>
        <div className="mt-6 bg-white rounded-lg shadow-md p-6 border border-gray-300">
          <h3 className="text-lg font-semibold text-black">Graduação em Ciência de Dados e Inteligência Artificial</h3>
          <p className="mt-1 text-gray-700">UFPB - Universidade Federal da Paraíba | Completa em Jul/2024</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
