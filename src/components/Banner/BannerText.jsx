import React from "react";

const BannerText = () => {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <div className="bg-gradient-to-t from-primary to-primary/70 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl">
          <p className="font-bold text-md md:text-3xl max-w-[800px] mx-auto leading-normal">
          Junte-se a nós nessa jornada de cultivo, solidariedade e transformação. Cada contribuição e apoio é um passo em direção a um Brasil mais nutritivo e cheio de possibilidades para todos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerText;
