import React from "react";
import { AbsoluteDiv } from "@/components/AbsoluteDiv";
import { motion } from 'framer-motion'
import { useKeyboardStepper } from "@/hooks/useKeyboardStepper";
import { useRouter } from "next/router";
import { CodeBlock } from "@/components/CodeBlock";


const SlideFive = () => {
    const router = useRouter();
    const { currentStep } = useKeyboardStepper({
        steps: 0,
        onEnd: () => router.push('/animatePresence'),
    })
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{
                    textAlign: 'center',
                    margin: '25px 0'
                }}>
                    <h1>Easy keyframes</h1>
                    <h2>just put them in an array!</h2>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <CSSAnimationDemo />
                </div>
            </div>
        </>
    )
}

const CSSAnimationDemo: React.FC = () => {
    return (
        <>
            <div style={{
                width: '50%'
            }}>
                <CodeBlock text={`
const Demo = () => {
    return (
        <motion.div
            style={{
                width: '300px',
                height: '300px',
                backgroundColor: '#e16971',
            }}
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
        />
    )
}`} />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',

            }}>
                <div>
                    <Demo />
                </div>
            </div>
        </>
    )
}

const Demo = () => {
    return (
        <motion.div
            style={{
                width: '300px',
                height: '300px',
                backgroundColor: '#e16971',
            }}
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
        />
    )
}

export default SlideFive;