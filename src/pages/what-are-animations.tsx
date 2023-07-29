import { AnimatedPage } from "@/components/AnimatedPage";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";

const SlideThree = () => {
    const router = useRouter();
    const {currentStep: listItem} = useKeyboardStepper({
        steps: 3,
        onEnd: () => router.push('/animation-types'),
        onBack: () => router.push('/learn'),
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
                    <h1>UI animation is the process of adding motion to UI elements</h1>
                </div>
                <div style={{
                    fontSize: '40px',
                    minWidth: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <ol>
                        <AnimatePresence>
                        {listItem >= 1 && <motion.li initial={{opacity: 0, marginLeft: -150}} animate={{opacity: 1, marginLeft: 0}} exit={{opacity:0, marginLeft: -150}}>Enhance UX and make loading more bearable</motion.li>}
                        {listItem >= 2 && <motion.li initial={{opacity: 0, marginLeft: -150}} animate={{opacity: 1, marginLeft: 0}} exit={{opacity:0, marginLeft: -150}}>Visually confirm to a user that the action succesfully completed</motion.li>}
                        {listItem >= 3 && <motion.li initial={{opacity: 0, marginLeft: -150}} animate={{opacity: 1, marginLeft: 0}} exit={{opacity:0, marginLeft: -150}}>And sometimes just for fun and general beauty</motion.li>}
                        </AnimatePresence>
                    </ol>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default SlideThree;