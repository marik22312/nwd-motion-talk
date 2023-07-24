import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';

export const Slide7 = () => {
    const [isVisible, setIsVisible] = useState(true);
    useKeyboardNavigation();
    return (
        <div>
            <h1>AnimatePresence</h1>
            <h2>Animate components when they're removed from the dom</h2>
            <div>
                <div></div>
                <div>
                    <MyComponent isVisible={isVisible} />
                    <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
                </div>
            </div>
        </div>
    )
}

const MyComponent: React.FC<{ isVisible?: boolean }> = ({ isVisible }) => (
    <AnimatePresence>
        {isVisible && (
            <motion.div
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "red",
                    borderRadius: 20,
                }}
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
        )}
    </AnimatePresence>
)

export default Slide7;