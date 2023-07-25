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

            <div style={styles.row}>
                <div style={{...styles.cell, backgroundColor: '#223344'}}>1</div>
                <div style={{...styles.cell, backgroundColor: '#334455'}}>2</div>
            </div>
            <div style={styles.row}>
                <div style={{...styles.cell, backgroundColor: '#445566'}}>3</div>
                <div style={{...styles.cell, backgroundColor: '#123'}}>4</div>
            </div>
        </motion.div>
    )
}

const styles = {
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
    }
}

export default SlideTwo;