import React, { CSSProperties } from 'react';
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
            <div style={{...styles.row, justifyContent: 'center', alignItems: 'center'}}>
                <h1>We Will learn <span>(briefly)</span></h1>
            </div>

            <div style={styles.row}>
                <div style={{...styles.cell, backgroundColor: '#223344'}}>
                    <h2>What are animations</h2>
                </div>
                <div style={{...styles.cell, backgroundColor: '#334455'}}><h2>Types of animations</h2></div>
            </div>
            <div style={styles.row}>
                <div style={{...styles.cell, backgroundColor: '#445566'}}><h2>Introduction to UI animations with Framer.motion</h2></div>
                <div style={{...styles.cell, backgroundColor: '#123'}}><h2>Suprising implementation demo</h2></div>
            </div>
        </motion.div>
    )
}

const styles: {[k: string]: CSSProperties} = {
    row: {
        display: 'flex',
        width: '100%',
        textAlign: 'center',
        height: '100%',
        alignContent: 'space-around',
        justifyContent: 'space-around',
    },
    cell: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default SlideTwo;