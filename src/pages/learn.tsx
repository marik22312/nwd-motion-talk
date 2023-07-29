import React, {CSSProperties} from 'react';
import {motion} from 'framer-motion';
import {useKeyboardNavigation} from '@/hooks/useKeyboardNavigation';
import {useRouter} from 'next/router';
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";

const SlideTwo = () => {
    const router = useRouter();
    useKeyboardStepper({
        steps: 0,
        onEnd: () => router.push('/what-are-animations'),
        onBack: () => router.push('/disclaimer'),
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
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <div style={{...styles.row, justifyContent: 'center', alignItems: 'center'}}>
                <h1>We Will learn <span>(briefly)</span></h1>
            </div>

            <div style={styles.row}>
                <div style={{...styles.cell}}>
                    <div style={{
                        backgroundColor: '#223344',
                        padding: '100px',
                    }}>
                        <h2>What are animations</h2>
                    </div>
                </div>
                <div style={{...styles.cell}}>
                    <div style={{
                        backgroundColor: '#334455',
                        padding: '100px',
                    }}>
                        <h2>Types of animations</h2>
                    </div>
                </div>
            </div>
            <div style={styles.row}>
                <div style={{...styles.cell}}>
                        <div style={{
                            backgroundColor: '#445566',
                            padding: '100px',
                        }}>
                        <h2>Intro to motion</h2>
                    </div>
                </div>
                <div style={{...styles.cell}}>
                    <div style={{
                        backgroundColor: '#123',
                        padding: '100px',
                    }}>
                        <h2>Page transitions</h2>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const styles: { [k: string]: CSSProperties } = {
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