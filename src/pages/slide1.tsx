import React, { PropsWithChildren } from "react";
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image'
import MyImage from '../assets/images/marik.jpg'
import MelioImage from '../assets/images/melio.png'
import LycheeImage from '../assets/images/lychee.jpeg'
import RadiosavtaLogo from '../assets/images/radiosavta.webp'
import { StyledImage } from "@/components/StyledImage";
import { AbsoluteDiv } from "@/components/AbsoluteDiv";

const SlideOne: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      maxHeight: '100vh',
    }}>
      <motion.div style={{
        position: 'absolute',
        top: '100px',
        left: '150px',
      }}>
        <h1>Hi! I'm Marik</h1>
        <h2>Senior Software Developer @ Melio</h2>
      </motion.div>
        <motion.div
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
        <AbsoluteDiv top="250px" left="150px" width="300px">
          <StyledImage src={MelioImage} alt="melio" />
        </AbsoluteDiv>
        <AbsoluteDiv top="400px" left="150px" width="300px">
          <StyledImage src={RadiosavtaLogo} alt="radiosavta" />
        </AbsoluteDiv>
        <AbsoluteDiv top={'100px'} left="700px" width="400px">
          <StyledImage src={LycheeImage} alt="Lychee" />
        </AbsoluteDiv>
    </div>
  );
};

export default SlideOne;
