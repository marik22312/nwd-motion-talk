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

const SlideOne: React.FC = () => {
  const router = useRouter();

  const [jobOpacity, setJobOpacity] = useState(0);
  const [radioOpacity, setRadioOpacity] = useState(0);
  const [dogOpacity, setDogOpacity] = useState(0);

  useKeyboardNavigation({
    steps: [
      () => setJobOpacity(1),
      () => setRadioOpacity(1),
      () => setDogOpacity(1),
    ],
    onEnd: () => router.push('/slide2'),
  });
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
        <motion.h2 animate={{opacity: jobOpacity}}>Senior Software Developer @ Melio</motion.h2>
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
        opacity: jobOpacity
      }}>
        <AbsoluteDiv top="250px" left="150px" width="300px">
          <StyledImage src={MelioImage} alt="melio" />
        </AbsoluteDiv>
      </motion.div>
      <motion.div
      initial={{opacity: 0}} animate={{
        opacity: radioOpacity
      }}>
        <AbsoluteDiv top="400px" left="150px" width="300px">
          <StyledImage src={RadiosavtaLogo} alt="radiosavta" />
        </AbsoluteDiv>
      </motion.div>
      <motion.div
      initial={{opacity: 0}} animate={{
        opacity: dogOpacity
      }}>
        <AbsoluteDiv top={'260px'} left="700px" width="400px">
          <StyledImage src={LycheeImage} alt="Lychee" />
        </AbsoluteDiv>
      </motion.div>
    </motion.div>
  );
};

export default SlideOne;
