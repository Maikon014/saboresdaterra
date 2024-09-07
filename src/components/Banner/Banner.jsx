import React from "react";
import BannerImg from "../../assets/Banner/juice.png";
import Splash from "../../assets/Banner/splash.png";
import { motion } from "framer-motion";
import { fadeUp } from "../../components/Products/Products";

const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
        {/* Banner Image section */}
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={BannerImg}
            alt=""
            className="w-[300px] md:w-[400px] mx-auto relative z-10"
          />
          <motion.img
            initial={{ opacity: 0, y: -100, rotate: -180, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={Splash}
            alt=""
            className="absolute bottom-0 z-0"
          />
        </div>
        {/* Banner Text info section */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <motion.h1
              variants={fadeUp(0.7)}
              initial="hidden"
              whileInView="show"
              className="text-3xl lg:text-4xl font-semibold "
            >
              Sabores da Terra: Cultivando Esperança e Qualidade
            </motion.h1>
            <motion.p
              variants={fadeUp(0.9)}
              initial="hidden"
              whileInView="show"
              className="text-gray-800"
            >
              Sabores da Terra é um projeto inovador e voluntário dedicado a promover a alimentação de qualidade e sustentável para as comunidades em situação de vulnerabilidade no Brasil. Nosso objetivo é cultivar e distribuir alimentos frescos e nutritivos, garantindo que as pessoas necessitadas tenham acesso a refeições saudáveis e saborosas.
              Acreditamos que todos têm o direito de desfrutar de uma alimentação balanceada e saborosa, e que a qualidade dos alimentos pode fazer uma diferença significativa na vida das pessoas. Por isso, trabalhamos com produtores locais e parceiros comprometidos com a agricultura sustentável e a justiça social. Nossos alimentos são cultivados com carinho e respeito pela terra, e cada prato preparado reflete o compromisso com o bem-estar e a dignidade de todos os beneficiários.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
