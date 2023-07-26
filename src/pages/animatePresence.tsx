import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";
import {useRouter} from "next/router";

export const AnimatePresenceSlide: React.FC = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const {currentStep} = useKeyboardStepper({
        steps: 0,
        onBack: () => router.push('/slide6'),
        onEnd: () => alert('end'),
    })
    return (
        <div>
            <div>
            <h1>AnimatePresence</h1>
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <div>
                    Codeblock
                </div>
                <div>
            <button onClick={() => setIsVisible(current => !current)}>{isVisible ? 'Hide' : 'Show'} element</button>
            <MyComponent isVisible={isVisible} />
                </div>
            </div>
        </div>
    )
}

const MyComponent: React.FC<{isVisible?: boolean}> = ({ isVisible }) => (
    <AnimatePresence>
        {isVisible && (
            <motion.div
                style={{
                    width: '300px',
                    height: '300px',
                    backgroundColor: '#223344'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
        )}
    </AnimatePresence>
)

export default AnimatePresenceSlide;

