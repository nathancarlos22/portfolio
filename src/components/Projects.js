// src/components/ProjectsCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Para ícones de setas personalizados

// Ativar módulos no SwiperCore
SwiperCore.use([Navigation, Pagination]);

function ProjectsCarousel() {
  const projects = [
    {
      title: "Avaliação de Modelos Preditivos em Estatísticas Esportivas ao Vivo",
      description: "Desenvolvimento de código para extração de informações relevantes utilizando técnicas avançadas de aprendizado de máquina e web scraping, com o objetivo de prever a ocorrência de eventos em partidas esportivas ao vivo.",
      date: "Mar/2024"
    },
    {
      title: "Análise de Sentimento de Comentários na Amazon com Transformers e Gradio",
      description: "Coleta de comentários de produtos na Amazon via web scraping e aplicação de modelos Transformers para análise de sentimento. Uma interface de usuário interativa foi criada com Gradio, permitindo análises de sentimento em tempo real.",
      date: "Dez/2022"
    },
    {
      title: "Dashboard de Visualização de Ações Financeiras com Vega-Lite, PHP e CSS",
      description: "Desenvolvimento de um dashboard interativo para visualização de dados financeiros, utilizando Vega-Lite para visualizações e PHP para o back-end. O projeto foi implantado no Heroku.",
      date: "Jun/2022"
    },
    {
      title: "Implementação de Algoritmo de Otimização para Problemas com Branch-and-Bound",
      description: "Aplicação da técnica de árvore de ramificação e corte (Branch-and-Bound) para resolver problemas de otimização, utilizando uma estrutura binária para armazenar soluções e modelos.",
      date: "Mar/2020"
    },
    {
      title: "Sistema de Delivery de Comida (Semelhante ao iFood)",
      description: "Desenvolvimento de uma aplicação web para delivery de comida, integrando ReactJS no front-end, Node.js no back-end e SQL para o gerenciamento do banco de dados.",
      date: "Jun/2022"
    },
    {
      title: "Spellchecker Utilizando Tabelas Hash",
      description: "Criação de um programa de verificação ortográfica (Spellchecker) com o uso de tabelas hash para comparação de palavras com um dicionário, avaliando diferentes métodos de tratamento de colisão.",
      date: "Jun/2022"
    }
  ];

  return (
    <section id="projects" className="bg-white px-4 py-16 text-black">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center">Projetos Relevantes</h2>
        
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="mt-8 relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-400">{project.description}</p>
                <p className="mt-4 text-sm font-bold text-gray-500">{project.date}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-2xl p-2 bg-gray-700 rounded-full shadow-lg cursor-pointer hover:bg-gray-600 transition duration-300">
            <FaArrowLeft />
          </div>
          <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-2xl p-2 bg-gray-700 rounded-full shadow-lg cursor-pointer hover:bg-gray-600 transition duration-300">
            <FaArrowRight />
          </div>
        </Swiper>

        {/* Pagination style adjustments */}
        <style jsx>{`
          .swiper-pagination-bullet {
            background-color: #4a5568;
            opacity: 1;
            margin: 0 4px !important;
          }
          .swiper-pagination-bullet-active {
            background-color: #1a202c;
          }
        `}</style>
      </div>
    </section>
  );
}

export default ProjectsCarousel;
