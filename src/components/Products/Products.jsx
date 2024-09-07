import React from "react";
import P1 from "../../assets/p1.png";
import P2 from "../../assets/p2.png";
import P3 from "../../assets/p3.png";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const ProductsData = [
  {
    id: 1,
    title: "Ovos e Salada",
    image: P1,
    desc: "É nesse espírito que os pratos com ovos e salada entram em cena, oferecendo não apenas nutrição, mas também aquele abraço acolhedor que só a comida de verdade pode proporcionar.",
    delay: 0.5,
  },
  {
    id: 2,
    title: "A Feijoada",
    desc: " Que cada garfada seja um lembrete de que, mesmo nas coisas mais simples, encontramos o verdadeiro conforto e a alegria de estar juntos. ",
    image: P2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "O Pão",
    desc: "Imaginemos as delícias que podemos criar com o pão: a suavidade de uma torrada com manteiga e uma camada de geleia caseira",
    image: P3,
    delay: 1.1,
  },
];

const Products = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container py-14">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center pb-10"
        >
          Mestres da Culinária: Aconchego e Sabor em Cada Prato
        </motion.h1>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ProductsData.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
            >
              <img
                src={item.image}
                alt=""
                className="w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300"
              />
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold font-handwriting text-center">
                  {item.title}
                </h1>
                <p className="text-center text-sm text-gray-600">{item.desc}</p>
                <button className="!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200">
                  
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
