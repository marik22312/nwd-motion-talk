import React from "react";
import {motion} from 'framer-motion';

const SlideOne: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
    >
      <div>Slide 2</div>
    </motion.div>
  );
};

export default SlideOne;
