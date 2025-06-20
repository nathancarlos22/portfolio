import React from 'react';

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center px-4 animate-fade-in"
    >
      <h1 className="text-5xl font-extrabold mb-4">Olá, eu sou o Nathan Carlos</h1>
      <p className="text-xl mb-8">Analista de Dados &amp; Desenvolvedor</p>
      <a
        href="#experience"
        className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        aria-label="Veja minhas experiências"
      >
        Veja minhas experiências
      </a>
    </section>
  );
}

export default Home;
