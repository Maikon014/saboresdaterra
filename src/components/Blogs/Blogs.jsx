import React from "react";
import Blog1 from "../../assets/Blogs/1.png";
import Blog2 from "../../assets/Blogs/2.png";
import Blog3 from "../../assets/Blogs/3.png";
import Blog4 from "../../assets/Blogs/4.png";
import { UpdateFollower } from "react-mouse-follower";

const BlogsData = [
  {
    id: 1,
    title: "Ana Costa: Transformando Comunidades",
    desc: "Ana Costa começou a sua jornada como voluntária no Sabores da Terra há dois anos. Com um background em nutrição, ela decidiu oferecer seu tempo para ajudar a promover a alimentação saudável entre as comunidades carentes. Ana não apenas ajuda na distribuição de alimentos, mas também organiza workshops de nutrição para educar os beneficiários sobre hábitos alimentares saudáveis. Seu entusiasmo e expertise têm transformado a vida de muitas famílias, proporcionando não apenas alimentos, mas conhecimento e recursos para uma vida mais saudável.",
    link: "blog",
    img: Blog1,
  },
  {
    id: 2,
    title: "João Oliveira: De Voluntário a Líder Comunitário",
    desc: "João Oliveira começou a trabalhar com o Sabores da Terra como um simples voluntário na área de logística. Sua dedicação e habilidade em gerenciar recursos logo o destacaram, e ele foi promovido a coordenador de uma das nossas principais regiões de distribuição. João agora lidera uma equipe de voluntários, garantindo que a logística da distribuição de alimentos seja eficiente e eficaz. Sua trajetória é um exemplo claro de como a paixão e o comprometimento podem levar a novas oportunidades e maior impacto na comunidade.",
    link: "blog",
    img: Blog2,
  },
  {
    id: 3,
    title: "Laura Santos: Educadora e Mentora",
    desc: "Laura Santos é uma educadora que decidiu usar seu tempo livre para fazer a diferença com o Sabores da Terra. Ela se envolveu na criação de programas educacionais voltados para crianças e jovens das comunidades atendidas. Laura organiza oficinas sobre agricultura sustentável e segurança alimentar, inspirando a próxima geração a valorizar e entender a importância dos alimentos saudáveis. Seu trabalho não só impacta os jovens de hoje, mas também semeia a esperança para um futuro mais consciente e sustentável.",
    link: "blog",
    img: Blog3,
  },
  {
    id: 4,
    title: "Carlos Almeida: O Coração da Cozinha",
    desc: "Carlos Almeida, um chef aposentado, trouxe suas habilidades culinárias para o Sabores da Terra com um objetivo claro: transformar refeições simples em pratos nutritivos e saborosos. Ele se voluntaria em nossa cozinha comunitária, onde lidera uma equipe de cozinheiros para preparar refeições equilibradas para distribuição. Carlos acredita que a comida pode ser um ato de amor e dignidade, e suas refeições são um reflexo de seu compromisso com a qualidade e o cuidado.",
    link: "blog",
    img: Blog4,
  },
];

const Blogs = () => {
  return (
    <section className="bg-gray-50 py-14">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 pb-8">
          Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BlogsData.map((item) => (
            <UpdateFollower
              key={item.id}
              mouseOptions={{
                backgroundColor: "black",
                zIndex: 999,
                followSpeed: 1.5,
                text: "read",
                textFontSize: "16px",
                scale: 1.2,
              }}
            >
              <div
                className="flex flex-col items-center justify-center gap-4 p-4 md:p-6
                max-w-sm mx-auto shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.img}
                  alt={`Imagem do blog: ${item.title}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="space-y-4 p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-gray-600 line-clamp-3">{item.desc}</p>
                  <a
                    href={item.link}
                    className="text-blue-500 hover:underline"
                    aria-label={`Leia mais sobre ${item.title}`}
                  >
                    Leia mais
                  </a>
                </div>
              </div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
