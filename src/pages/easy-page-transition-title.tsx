import React from 'react';
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";
import {useRouter} from "next/router";
import {motion} from 'framer-motion'
export const EasyPageTransition: React.FC= () => {
    const router = useRouter();
    const {currentStep} = useKeyboardStepper({
        steps: 0,
        onBack: () => router.push('/framer-loves-next'),
        onEnd: () => router.push('/easy-page-transition'),
    })
    return (
    <motion.div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }} exit={{
        opacity: 0
    }}>
            <h1>Easy Page Transitions</h1>
    </motion.div>
  );
}

export default EasyPageTransition;