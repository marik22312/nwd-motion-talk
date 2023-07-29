import React, {CSSProperties} from 'react';
import {motion} from 'framer-motion'
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";
import {useRouter} from "next/router";

const draw = {
    hidden: {pathLength: 0, opacity: 0},
    visible: (i: number) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {delay, type: "spring", duration: 1.5, bounce: 0},
                opacity: {delay, duration: 0.01}

            }
        };
    }
};

const style: CSSProperties = {
    strokeWidth: '10px',
    strokeLinecap: 'round',
    fill: 'transparent'
}

export const TitlePage = () => {
    const router = useRouter();
    useKeyboardStepper({
        steps: 0,
        onBack: () => router.push('/who-am-i'),
        onEnd: () => router.push('/disclaimer'),
    })
    return (
        <motion.div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',

            }}
            initial={{
                opacity: 0
            }}
            animate={{opacity: 1}}>
            <div>
                <h1>Easy UI animations using framer-motion</h1>
            </div>
            <div>
                <motion.svg
                    width="600"
                    height="600"
                    viewBox="0 0 600 600"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.circle
                        style={style}
                        cx="100"
                        cy="100"
                        r="80"
                        stroke="#ff0055"
                        variants={draw}
                        custom={0}
                    />
                    <motion.line
                        style={style}
                        x1="220"
                        y1="30"
                        x2="360"
                        y2="170"
                        stroke="#00cc88"
                        variants={draw}
                        custom={1}
                    />
                    <motion.line
                        style={style}
                        x1="220"
                        y1="170"
                        x2="360"
                        y2="30"
                        stroke="#00cc88"
                        variants={draw}
                        custom={2.5}
                    />
                    <motion.rect
                        style={style}
                        width="140"
                        height="140"
                        x="410"
                        y="30"
                        rx="20"
                        stroke="#0099ff"
                        variants={draw}
                        custom={2}
                    />
                </motion.svg>
            </div>
        </motion.div>
    )
}

export default TitlePage;