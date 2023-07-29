import React from 'react';
import AppImage1 from '@/assets/codeBlocks/_app-1.png';
import AppImage2 from '@/assets/codeBlocks/_app-2.png';
import AppImage3 from '@/assets/codeBlocks/_app-3.png';
import PageImage1 from '@/assets/codeBlocks/page-1.png';
import PageImage2 from '@/assets/codeBlocks/page-2.png';
import PageImage3 from '@/assets/codeBlocks/page-3.png';
import PageImage4 from '@/assets/codeBlocks/page-4.png';

import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";
import {StyledImage} from "@/components/StyledImage";
import {useRouter} from "next/router";
import {motion} from 'framer-motion'

    const images = [AppImage1, AppImage2, AppImage3, PageImage1, PageImage2, PageImage3, PageImage4];
export const EasyPageTransition: React.FC = () => {
    const router = useRouter();
    const {currentStep} = useKeyboardStepper({
        steps: 6,
        onBack: () => router.push('/easy-page-transition-title'),
    })
    return (
        <motion.div
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '100vh',
            }}
            exit={{
                opacity: 0
            }}>
            <div style={{width: '50%'}}>
                <h1>Easy Page Transitions</h1>
            </div>
            <div>
                <StyledImage src={images[currentStep]} alt={`image-${currentStep}`}/>
            </div>
        </motion.div>
    );
}

export default EasyPageTransition;