import React from "react";

const faqData = [
  {
    question: "O que é o projeto Sabores da Terra?",
    answer:
      "O Sabores da Terra é um projeto inovador e voluntário dedicado a promover a alimentação de qualidade e sustentável para comunidades em situação de vulnerabilidade no Brasil. Nosso objetivo é cultivar e distribuir alimentos frescos e nutritivos, garantindo que pessoas necessitadas tenham acesso a refeições saudáveis e saborosas.",
  },
  {
    question: "Quem pode receber os alimentos fornecidos pelo Sabores da Terra?",
    answer:
      "O projeto atende comunidades em situação de vulnerabilidade. Se você ou alguém que conhece está em necessidade de assistência alimentar, por favor, entre em contato conosco através dos canais de comunicação disponíveis para verificar a elegibilidade e os procedimentos de inscrição.",
  },
  {
    question: "Como posso me inscrever para receber alimentos do projeto?",
    answer:
      "Para se inscrever, entre em contato conosco pelo e-mail contato@saboresdaterra.org.br ou visite nosso site e preencha o formulário de solicitação disponível na seção de Inscrições. Nossa equipe avaliará sua solicitação e fornecerá informações sobre os próximos passos.",
  },
  {
    question: "Com que frequência os alimentos são distribuídos?",
    answer: "As distribuições de alimentos são realizadas regularmente, mas a frequência pode variar de acordo com a localidade e a disponibilidade de recursos. Recomendamos acompanhar nosso site ou as redes sociais para atualizações sobre as próximas datas de distribuição.",
  },
];
const FAQ = () => {
  const [active, setActive] = React.useState(null);
  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 px-8">
      <h1 className="text-3xl font-bold text-center pb-8">
      Perguntas Frequentes (FAQ) - Sabores da Terra
      </h1>

      {faqData.map((item, index) => (
        <div key={index} className="mb-4 py-4 border-b border-gray-300 ">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.question}
            </h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>

          {active === index && <p className="text-gray-600">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
