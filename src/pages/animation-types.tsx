import {motion} from 'framer-motion';
import { useKeyboardStepper } from "@/hooks/useKeyboardStepper";
import { useRouter } from 'next/router';
import {StyledImage} from "@/components/StyledImage";
import TwitterLike from "@/assets/images/twitter.gif";
import AnimationGif from "@/assets/images/animation.gif";

const AnimationTypes = () => {
    const router = useRouter();
    const { currentStep } = useKeyboardStepper({
        steps: 2,
        onEnd: () => router.push('/animations-are-hard'),
        onBack: () => router.push('/what-are-animations'),
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
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                animate={{
                    opacity: currentStep >= 1 ? 1 : 0,
                }}>
                    <h2>Animations</h2>
                    <div>
                        <StyledImage src={AnimationGif} alt={'Animation'} />
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                animate={{
                    opacity: currentStep >= 2 ? 1 : 0,
                }}>
                    <h2>
                        Microinteractions
                    </h2>
                    <div >
                        <StyledImage src={TwitterLike} alt="twitter" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AnimationTypes;