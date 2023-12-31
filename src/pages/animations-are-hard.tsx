import React from "react";
import style from '../components/CssAnimationDemo.module.scss'
import {CodeBlock} from "@/components/CodeBlock";
import {AbsoluteDiv} from "@/components/AbsoluteDiv";
import {AnimatePresence, motion} from 'framer-motion'
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";
import { useRouter } from "next/router";


const SlideFive = () => {
const router = useRouter();
    const {currentStep} = useKeyboardStepper({
        steps: 1,
        onEnd: () => router.push('/enter-framer-motion'),
        onBack: () => router.push('/animation-types'),
    })
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{
                    textAlign: 'center',
                    margin: '25px 0'
                }}>
                    <h1>Animations are hard!</h1>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <CSSAnimationDemo/>
                </div>
            </div>
            <AnimatePresence>
                {(currentStep >= 1) && <Gift/>}
            </AnimatePresence>
        </>
    )
}

const CSSAnimationDemo: React.FC = () => {
    return (
        <>
            <div style={{
                width: '50%',
            }}>
                <CodeBlock
                    text={`
@keyframes opacity {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    rotate: 180deg;
    opacity: 1;
  }
  75% {
    rotate: 0;
  }
  100% {
    opacity: 0;
  }
}

.box {
  height: 100px;
  width:100px;
  margin: 50px auto 0;
  background-color: #e16971;
  animation: opacity 3s infinite;
}`}
                    language={'css'}
                />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',

            }}>
                <div>
                    <div className={style.box}/>
                </div>
            </div>
        </>
    )
}

export const Gift: React.FC = () => {
    return (
        <AbsoluteDiv top={'100px'} left={'100px'} width={'700px'}>
            <div style={{width: '100%', height: 0, paddingBottom: '96%', position: 'relative'}}>
                <iframe src="https://giphy.com/embed/13FrpeVH09Zrb2" width="100%" height="100%"
                        style={{position: 'absolute'}} frameBorder="0" className="giphy-embed" allowFullScreen>
                </iframe>
            </div>
            <p>
                <a href="https://giphy.com/gifs/css-13FrpeVH09Zrb2">via GIPHY</a></p>
        </AbsoluteDiv>
    )
}

export default SlideFive;