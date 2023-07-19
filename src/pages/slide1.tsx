import React from "react";
import {motion} from 'framer-motion';
import Image from 'next/image'
import MyImage from '../assets/images/marik.jpg'
import MelioImage from '../assets/images/melio.png'
import LycheeImage from '../assets/images/lychee.jpeg'

const SlideOne: React.FC = () => {
  return (
    <motion.div
    style={{
      position: 'absolute'
    }}
      initial={{ top: '-100%' }}
      animate={{ top: 0}}
      transition={{
        duration: 0.75,
      }}
    >
      <div>
        <h1>Hi! I'm Marik</h1>
        <h2>Senior Software Developer @ Melio</h2>
        <motion.div animate={{
          opacity: 1
        }}>
        <Image src={MyImage} alt="me" />
        </motion.div>
        <Image src={MelioImage} alt="melio" />
        <Image src="https://res.cloudinary.com/marik-shnitman/image/upload/f_auto,dpr_auto,q_auto/v1637258645/radiosavta/assets/ogImage.jpg" alt="me" height="175" width="150" />
        <Image src={LycheeImage} />
      </div>
    </motion.div>
  );
};

export default SlideOne;
