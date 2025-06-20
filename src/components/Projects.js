import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Avaliação de Modelos Preditivos em Estatísticas Esportivas ao Vivo",
    link: "https://github.com/nathancarlos22/eo-fut-live",
    description: "Pipeline de dados em tempo real para avaliar modelos de machine learning em eventos esportivos ao vivo."
  },
  {
    title: "Análise de Sentimento de Comentários na Amazon com Transformers e Gradio",
    link: "https://github.com/nathancarlos22/pln-projeto-reviews",
    description: "Classificação de sentimentos em reviews com modelos Transformers e interface interativa Gradio."
  },
  {
    title: "Dashboard de Visualização de Ações Financeiras com Vega-Lite, PHP e CSS",
    link: "https://github.com/nathancarlos22/Olho-de-Tandera-Finance",
    description: "Dashboard responsivo para monitoramento de ações, construído com Vega-Lite no front-end e PHP no back-end."
  },
  {
    title: "Sistema de Delivery de Comida (Semelhante ao iFood)",
    link: "https://github.com/nathancarlos22/Project-Ifood-FrontEnd",
    description: "Aplicação front-end de delivery de refeições com React.js, integrando APIs de pedido e pagamento."
  },
  {
    title: "Implementação de Algoritmo de Otimização para Problemas com Branch-and-Bound",
    link: "https://github.com/nathancarlos22/Projeto-final-PO",
    description: "Solução em Python para problemas de otimização combinatória usando técnica de Branch-and-Bound."
  },
  {
    title: "Chatbot de Reconhecimento de Intenções",
    link: "https://github.com/nathancarlos22/chatbot-intent",
    description: (
      <>
        <p>Chatbot que utiliza BERT para identificar intenções de usuários e responder de forma personalizada.</p>
        <ul>
          <li>Detecção de Intenções: reconhece até 10 intenções diferentes.</li>
          <li>Respostas Personalizadas: gera respostas adequadas substituindo <code>&lt;HUMAN&gt;</code> pelo nome do usuário.</li>
          <li>Histórico de Intenções: armazena e permite consulta das últimas três intenções.</li>
          <li>Treinamento do Modelo: faz re-treinamento automático se não houver modelo salvo.</li>
        </ul>
      </>
    )
  },
  {
    title: "Backtesting de Estratégias com Médias Móveis para BTC/USD",
    link: "https://github.com/nathancarlos22/eo-trade",
    description: (
      <>
        <p>Projeto de backtesting de estratégias usando EMAs e API da Binance para o par BTC/USD.</p>
        <ul>
          <li>Coleta de Dados Históricos: obtém candles via Binance API.</li>
          <li>Cálculo de EMAs: identifica cruzamentos de médias móveis para sinais de compra e venda.</li>
          <li>Simulação de Portfólio: avalia desempenho de capital fictício com Python.</li>
          <li>Notificações: envia sinais via Telegram em tempo real.</li>
        </ul>
      </>
    )
  }
];

function Projects() {
  return (
    <section id="projects" className="bg-white px-4 py-16 text-black">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div key={proj.link} className="bg-gray-100 rounded-lg shadow-lg p-6 relative">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-gray-700 hover:text-black"
                aria-label={`Repositório GitHub de ${proj.title}`}
              >
                <FaGithub size={24} />
              </a>
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <div className="text-gray-700 text-sm">
                {proj.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
