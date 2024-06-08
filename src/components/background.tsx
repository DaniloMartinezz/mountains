// Background.tsx
import React from 'react';
import { motion } from 'framer-motion';
import clouds from '../assets/clouds.png'; // Importando imagem de nuvens
import mountainBack from '../assets/mountainBack.png'; // Importando imagem de montanha de fundo
import mountainFront from '../assets/MountainFront.png'; // Importando imagem de montanha da frente
import gradientMain from '../assets/gradienteMain.png';

const mountainBackVariants = {
  initial: { y: '20vh' },
  animate: { y: 0, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.03 } },
};

const mountainFrontVariants = {
  initial: { y: '10vh' },
  animate: { y: 0, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.2 } },
};

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <img src={gradientMain} alt="gradient" className="relative w-full h-[100%] md:h-full z-10  " />

      <img src={clouds} alt="Clouds" className="absolute inset-0 object-cover w-full md:h-full md:p-0 h-[160vh] pb-20 " />

      <motion.img
        src={mountainBack}
        alt="Background Mountain"
        className="absolute bottom-0 left-0 md:top-56 top-[25rem]  md:h-full md:w-full"
        initial="initial"
        animate="animate"
        variants={mountainBackVariants}
      />
      <motion.img
        src={mountainFront}
        alt="Foreground Mountain"
        className="absolute bottom-0 left-0 md:top-80  top-[33rem]  md:h-full md:w-full"
        initial="initial"
        animate="animate"
        variants={mountainFrontVariants}
      />
    </div>
  );
};

export default Background;
