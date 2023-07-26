import { AnimatedPage } from "@/components/AnimatedPage";
import { StyledImage } from "@/components/StyledImage";
import TwitterLike from '@/assets/images/twitter.gif';
import { AbsoluteDiv } from "@/components/AbsoluteDiv";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { useRouter } from "next/router";
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";
import {list} from "postcss";

const SlideThree = () => {
    const router = useRouter();
    const {currentStep: listItem} = useKeyboardStepper({
        steps: 4,
        onEnd: () => router.push('/slide4'),
    })
    return (
        <AnimatedPage>
            <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
                <div style={{
                    maxWidth: '50%',
                    'textAlign': 'center',
                }}>
                    <h1>What are animations and when to use them?</h1>
                    <motion.h2 animate={{
                        opacity: listItem >=1 ? 1 : 0
                    }}>UI animation is the process of adding motion to UI elements</motion.h2>
                </div>
                <div style={{
                    fontSize: '40px',
                    minWidth: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <ol>
                        <AnimatePresence>
                        {listItem >= 2 && <motion.li initial={{opacity: 0, marginLeft: -150}} animate={{opacity: 1, marginLeft: 0}} exit={{opacity:0, marginLeft: -150}}>Enhance UX and make loading more bearable</motion.li>}
                        {listItem >= 3 && <motion.li initial={{opacity: 0, marginLeft: -150}} animate={{opacity: 1, marginLeft: 0}} exit={{opacity:0, marginLeft: -150}}>Visually confirm to a user that the action succesfully completed</motion.li>}
                        {listItem >= 4 && <motion.li initial={{opacity: 0, marginLeft: -150}} animate={{opacity: 1, marginLeft: 0}} exit={{opacity:0, marginLeft: -150}}>And sometimes just for fun and general beauty</motion.li>}
                        </AnimatePresence>
                    </ol>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default SlideThree;