import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import live from "./animations/Animation - 1733845955484.json";
import { LottieRefCurrentProps } from "lottie-react";
import vip from "./animations/Animation - 1733846186907.json";

import train from "./animations/Animation - 1733846298804.json";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const { t } = useTranslation();

  return (
    <section id="services" className="cta min-h-[700px] container pt-16 relative flex justify-center items-center rounded-xl border border-gray-200 border-opacity-55">
      <motion.div
        id="diferencial"
        className="diferencial container mx-auto p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl text-white font-bold text-center mb-8">
        {t("services.section_title")}        </h1>
        <div className="services grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="service-item text-white flex flex-col justify-center items-center bg-white bg-opacity-10 backdrop-blur-[6px] border border-gray-500 shadow-lg rounded-lg p-6 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Lottie
              lottieRef={lottieRef}
              animationData={live} // Use the imported variable here
              style={{ width: 250, height: 250 }}
              loop
              autoplay
            />{" "}
            <h2 className="text-xl text-yellow-500 font-semibold mb-2">
            {t("services.training_courses_title")}</h2>
            <p>
            {t("services.training_courses_description")}            </p>
          </motion.div>
          <motion.div
            className="service-item text-white flex flex-col justify-center items-center bg-white bg-opacity-10  backdrop-blur-[6px] border border-gray-500 shadow-lg rounded-lg p-6 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
           <Lottie
              lottieRef={lottieRef}
              animationData={train} // Use the imported variable here
              style={{ width: 250, height: 250 }}
              loop
              autoplay
            />
            <h2 className="text-xl text-yellow-500  font-semibold mb-2">
            {t("services.live_daily_followup_title")}            </h2>
            <p>
            {t("services.live_daily_followup_description")}</p>
          </motion.div>
          <motion.div
            className="service-item text-white flex flex-col justify-center items-center bg-white bg-opacity-10  backdrop-blur-[6px] border border-gray-500 shadow-lg rounded-lg p-6 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
           <Lottie
              lottieRef={lottieRef}
              animationData={vip} // Use the imported variable here
              style={{ width: 250, height: 250 }}
              loop
              autoplay
            />
            <h2 className="text-xl font-semibold text-yellow-500  mb-2"> 
            {t("services.vip_groups_title")}            </h2>
            <p className="text-xl">
            {t("services.vip_groups_description")}






</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
