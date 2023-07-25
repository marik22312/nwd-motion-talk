import {motion} from 'framer-motion';
import { useKeyboardStepper } from "@/hooks/useKeyboardStepper";
import { useRouter } from 'next/router';

const Slide4 = () => {
    const router = useRouter();
    const { currentStep } = useKeyboardStepper({
        steps: 2,
        onEnd: () => router.push('/slide5'),
    });
    return (
        <div style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
        }}>
            <div>
                <h1>Two primary types of animations</h1>
            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}>
                <motion.div
                animate={{
                    opacity: currentStep >= 1 ? 1 : 0,
                }}>
                    <h2>Animations</h2>
                </motion.div>
                <motion.div
                animate={{
                    opacity: currentStep >= 2 ? 1 : 0,
                }}>
                    <h2>
                        Microinteractions
                    </h2>
                </motion.div>
            </div>
        </div>
    )
}

export default Slide4;