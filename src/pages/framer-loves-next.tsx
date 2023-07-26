import { useKeyboardStepper } from "@/hooks/useKeyboardStepper";
import { useRouter } from "next/router";
import { motion } from 'framer-motion';

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                loop: true,
                repeat: Infinity,
                pathLength: {  type: "spring", duration: 3, bounce: 0 },
                opacity: {  duration: 0.01 }
            }
        };
    }
};

export const FramerLovesNext = () => {
    const router = useRouter()
    const { currentStep } = useKeyboardStepper({
        steps: 1,
        onBack: () => router.push('/animatePresence'),
        onEnd: () => router.push('/404'),
    })
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <h1>Framer
            <motion.svg 
                width="100"
                height="100"
                // viewBox="0 0 600 600"
                initial={{
                    pathLength: 0,
                    opacity: 0,
                }}
                // animate={{
                //     pathLength: [0, 1],
                // }}
                // transition={{
                //     duration: '3s',
                //     ease: "easeInOut",
                //     repeat: Infinity,
                // }}
                animate={currentStep >= 1 ? 'visible' : 'hidden'}
                >
                <motion.path
                    d="M 10 30 A 20 20 0 0 1 50 30 A 20 20 0 0 1 90 30 Q 90 60 50 90 Q 9 61 10 30 Z"
                    fill="transparent"
                    stroke="red"
                    strokeWidth="3"
                    variants={draw}
                />
            </motion.svg>
            Next</h1>
            </div>
            <p>Let's build a simple page transition</p>
        </div>
    )
}

export default FramerLovesNext;
