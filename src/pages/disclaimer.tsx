import React from 'react';
import { motion } from 'framer-motion';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import { useRouter } from 'next/router';
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";

const SlideTwo = () => {
    const router = useRouter();
    useKeyboardStepper({
        steps: 0,
        onEnd: () => router.push('/learn'),
        onBack: () => router.push('/title'),
    })
    return (
        <motion.div
        style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h1>Disclaimer</h1>
            <div style={{
                fontSize: '40px',
                textAlign: 'center',
            }}>
            <p>This talk will not teach you how to animate UI using Motion</p>
            <p>If you find the topic interesting, I highly recomment reading their docs</p>
            </div>
        </motion.div>
    )
}

export default SlideTwo;