import { useKeyboardStepper } from "@/hooks/useKeyboardStepper";
import { useRouter } from "next/router";
import { motion } from 'framer-motion';
import {CSSProperties} from "react";

const style: CSSProperties = {
    strokeWidth: '10px',
    strokeLinecap: 'round',
    fill: 'transparent'
}

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
    useKeyboardStepper({
        steps: 0,
        onBack: () => router.push('/keyframes'),
        onEnd: () => router.push('/easy-page-transition-title'),
    })
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
            <h1>Framer<span style={{
                margin: '0 30px'
            }}>
            <motion.svg 
                width="100"
                height="100"
                initial={'hidden'}
                animate={'visible'}

                >
                <motion.path
                    style={style}
                    d="M 10 30 A 20 20 0 0 1 50 30 A 20 20 0 0 1 90 30 Q 90 60 50 90 Q 9 61 10 30 Z"
                    fill="transparent"
                    stroke="red"
                    strokeWidth="3"
                    variants={draw}
                />
            </motion.svg>
                </span>
            Next</h1>
            </div>
        </div>
    )
}

export default FramerLovesNext;
