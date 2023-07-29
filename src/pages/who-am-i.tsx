import React, { useState } from "react";
import { motion } from 'framer-motion';
import MyImage from '../assets/images/marik.jpg'
import MelioImage from '../assets/images/melio.png'
import LycheeImage from '../assets/images/lychee.jpeg'
import RadiosavtaLogo from '../assets/images/radiosavta.webp'
import { StyledImage } from "@/components/StyledImage";
import { AbsoluteDiv } from "@/components/AbsoluteDiv";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { useRouter } from "next/router";
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";

const SlideOne: React.FC = () => {
  const router = useRouter();


  const {currentStep} = useKeyboardStepper({
    steps: 3,
    onEnd: () => router.push('/title'),
  })

  return (
    <motion.div style={{
      position: 'relative',
      maxHeight: '100vh',
    }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div style={{
        position: 'absolute',
        top: '100px',
        left: '150px',
      }}>
        <h1>Hi! I'm Marik</h1>
        <motion.h2 animate={{opacity: currentStep > 0 ? 1 : 0}}>Senior Software Developer @ Melio</motion.h2>
      </motion.div>
      <motion.div
      initial={{opacity: 0}}
        animate={{
          opacity: 1
        }}
        style={{
          position: 'absolute',
          top: '100px',
          right: '100px',
          width: '400px',
        }}
      >
        <StyledImage src={MyImage} alt="me" />
      </motion.div>
      <motion.div
      initial={{opacity: 0}} animate={{
        opacity: currentStep > 0 ? 1 : 0
      }}>
        <AbsoluteDiv top="250px" left="150px" width="300px">
          <StyledImage src={MelioImage} alt="melio" />
        </AbsoluteDiv>
      </motion.div>
      <motion.div
      initial={{opacity: 0}} animate={{
        opacity: currentStep > 1 ? 1 : 0
      }}>
        <AbsoluteDiv top="400px" left="150px" width="300px">
          <StyledImage src={RadiosavtaLogo} alt="radiosavta" />
        </AbsoluteDiv>
      </motion.div>
      <motion.div
      initial={{opacity: 0}} animate={{
        opacity: currentStep > 2 ? 1 : 0
      }}>
        <AbsoluteDiv top={'260px'} left="700px" width="400px">
          <StyledImage src={LycheeImage} alt="Lychee" />
        </AbsoluteDiv>
      </motion.div>
    </motion.div>
  );
};

export default SlideOne;
