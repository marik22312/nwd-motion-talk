import React from 'react';
import { motion } from 'framer-motion';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import { useRouter } from 'next/router';

const SlideTwo = () => {
    const router = useRouter();
    useKeyboardNavigation({
        steps: [
            () => router.push('/slide3'),
        ]
    });
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
            <p>
                Instead, we will focus on why we should use UI animations, and what cool things we can do with them
            </p>
            <p>Oh, and a bit of "Look at this cool thing i made", but that's for later.</p>
            </div>
        </motion.div>
    )
}

export default SlideTwo;