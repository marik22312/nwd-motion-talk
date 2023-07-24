import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

export interface AnimatedPageProps {

}

export const AnimatedPage: React.FC<PropsWithChildren<AnimatedPageProps>> = ({ children, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...props}
        >
            {children}
        </motion.div>
    )
};