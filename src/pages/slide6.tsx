import React, {useState} from 'react';
import {CodeBlock} from "react-code-blocks";
import {motion} from 'framer-motion'
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";
import {useRouter} from "next/router";

const SlideSix = () => {
    const router = useRouter()
    useKeyboardStepper({
        steps: 1,
        onEnd: () => router.push('/animatePresence'),
        onBack: () => router.push('/slide5'),
    })
    return (
        <div>
            <h1>Enter framer!</h1>
            <p>A powerful React animations librar, from Framer</p>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
            }}>
                <div>
                    <CodeBlock
                        text={`
          const Example: React.FC = () => {
            const [x, setX] = useState(0);
            const [y, setY] = useState(0);
            const [rotate, setRotate] = useState(0);
            return (
              <div className="example">
                    <div>
                      <motion.div
                        style={{
                          width: 100,
                          height: 100,
                          backgroundColor: "red",
                          borderRadius: 20,
                        }}
                        animate={{ x, y, rotate }}
                        transition={{ type: "spring" }}
                      />
                    </div>
                    <div className="inputs">
                      <div>
                      <label for={"x"}>x</label>
                      <input id={"x"} type="range" value={x} onChange={(e) => setX(parseInt(e.target.value, 10))} />
                      </div>
                      <input type="range" value={y} onChange={(e) => setY(parseInt(e.target.value, 10))} />
                      y
                      <input type="range" value={rotate} onChange={(e) => setRotate(parseInt(e.target.value, 10))} min={-180} max={180} />
                      rotate
                    </div>
                  </div>
            )
          }`}
                        language="jsx"
                        theme={{
                            mode: 'dark'
                        }}
                        startingLineNumber={0}
                        wrapLongLines={false}/>
                </div>
                <div>
                    <Example/>
                </div>
            </div>
        </div>
    )
}

const Example: React.FC = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);
    return (
        <div className="example">
            <div>
                <motion.div
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "red",
                        borderRadius: 20,
                    }}
                    animate={{x, y, rotate}}
                    transition={{type: "spring"}}
                />
            </div>
            <div style={{
                width: '100%'
            }}>
                <form onReset={() => {
                    setX(0);
                    setY(0);
                    setRotate(0);
                }}>
                    <div>
                        <label htmlFor={"x"}>x</label>
                        <input id={"x"} type="range" min="-100" max="100" value={x}
                               onChange={(e) => setX(parseInt(e.target.value, 10))}/>
                    </div>
                    <div>
                        <label htmlFor={"y"}>y</label>
                        <input id={"y"} type="range" min="-100" max="100" value={y}
                               onChange={(e) => setY(parseInt(e.target.value, 10))}/>
                    </div>
                    <div>
                        <label htmlFor={"rotate"}>rotate</label>
                        <input id="rotate" type="range" value={rotate}
                               onChange={(e) => setRotate(parseInt(e.target.value, 10))} min={-180} max={180}/>
                    </div>
                    <div>
                        <button role={"reset"} type={"reset"}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SlideSix