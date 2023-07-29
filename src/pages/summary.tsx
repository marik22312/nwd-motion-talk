import {motion} from 'framer-motion'
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";
import {PropsWithChildren} from "react";
import Summary from "@/pages/summary";
import {useRouter} from "next/router";

export const SummaryPage = () => {
    const router  = useRouter()
    const {currentStep} = useKeyboardStepper({
        steps: 4,
        onEnd: () => router.push('/thank-you'),
        onBack: () => router.push('/easy-page-transition'),
    })
    return (
        <motion.div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'

        }}>
            <div style={{
                paddingLeft: '100px',
            }}>
                <h1>
                    Summary
                </h1>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '50%',
            }}>
                <SummaryItem bgColor={'#112233'} isVisible={currentStep > 0}>
                    <h2>What are UI animations and their use-cases</h2>
                </SummaryItem>
                <SummaryItem bgColor={'#223344'} isVisible={currentStep > 1}>
                    <h2>Types of animations</h2>
                </SummaryItem>
                <SummaryItem bgColor={'#334455'} isVisible={currentStep > 2}>
                    <h2>Easy animations with framer-motion</h2>
                </SummaryItem>
                <SummaryItem bgColor={'#445566'} isVisible={currentStep > 3}>
                    <h2>Easy page transitions in Next.js</h2>
                </SummaryItem>
            </div>
        </motion.div>
    )
}

const SummaryItem: React.FC<PropsWithChildren<{ isVisible: boolean, bgColor: string }>> = ({children, isVisible, bgColor}) => {
    return (
        <motion.div style={{
            width: '100%',
            height: '100%',
            backgroundColor: bgColor,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 25px',
            textAlign: 'center'
        }}
            variants={{
                hidden: {
                    scale: 0
                },
                visible: {
                    scale: 1
                }
            }}
            initial={'hidden'}
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{
                duration: 0.5
            }}
        >
            {children}
        </motion.div>
    )
}
export default SummaryPage;
