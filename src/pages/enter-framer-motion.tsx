import React, {useState} from 'react';
import {CodeBlock, dracula} from "react-code-blocks";
import {motion} from 'framer-motion'
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";
import {useRouter} from "next/router";

const SlideSix = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);
    const router = useRouter()
    useKeyboardStepper({
        steps: 0,
        onEnd: () => router.push('/keyframes'),
        onBack: () => router.push('/animations-are-hard'),
    })
    return (
        <div style={{margin: '20px 30px'}}>
            <h1>Motion</h1>
            <h2>A powerful React animations library, from Framer</h2>
            <div style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
            }}>
                <div style={{width: '100%', fontSize: 16}}>
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
                        animate={{ 
                            x: ${x},
                            y: ${y},
                            rotate: ${rotate}
                      }
                        transition={{ type: "spring" }}
                      />
                    </div>
                    <div className="inputs">
                      <div>
                      <label for={"x"}>x</label>
                      <input id={"x"} type="range" value={${x}} onChange={setX} />
                      </div>
                      <input type="range" value={${y}} onChange={setY} />
                      y
                      <input type="range" value={${rotate}} onChange={setRotate}/>
                      rotate
                    </div>
                  </div>
            )
          }`}
                        language="jsx"
                        theme={dracula}
                        startingLineNumber={0}
                        wrapLongLines={false}/>
                </div>
                <div style={{
                    width: '50%',
                }}>
                    <Example x={x} rotate={rotate} setRotate={setRotate} setY={setY} setX={setX} y={y}/>
                </div>
            </div>
        </div>
    )
}

interface RangeInputProps {
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: number;
    label: string;
    min?: string;
    max?: string;
}

const RangeInput: React.FC<RangeInputProps> = ({id, value, onChange, label, min, max}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="range" value={value} onChange={onChange} min={min} max={max} style={{
                width: '80%',
            }}/>
        </>
    )
}

interface ExampleProps {
    x: number,
    setX: (x: number) => void;
    y: any;
    setY: any;
    rotate: any;
    setRotate: any
}

const Example: React.FC<ExampleProps> = (props) => {
    const {
        x,
        setRotate,
        setY,
        setX,
        rotate,
        y
    } = props
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            textAlign: 'center',
        }}>
            <div>
                <motion.div
                    style={{
                        width: 250,
                        height: 250,
                        backgroundColor: "red",
                        borderRadius: 20,
                    }}
                    animate={{x, y, rotate}}
                    transition={{type: "spring"}}
                />
            </div>
            <div style={{
                width: '100%',
                marginTop: '20px',
            }}>
                <form onReset={() => {
                    setX(0);
                    setY(0);
                    setRotate(0);
                }}>
                    <div>
                        <RangeInput
                            label={"X"}
                            id={"x"}
                            min="-100"
                            max="100"
                            value={x}
                            onChange={(e) => setX(parseInt(e.target.value, 10))}
                        />
                    </div>
                    <div>
                        <RangeInput
                            label={'Y'}
                            id={"y"}
                            min="-100"
                            max="100"
                            value={y}
                            onChange={(e) => setY(parseInt(e.target.value, 10))}
                        />
                    </div>
                    <div>
                        <RangeInput
                            id="rotate"
                            label="Rotate"
                            value={rotate}
                            onChange={(e) => setRotate(parseInt(e.target.value, 10))} min={'-180'} max={'180'}
                        />
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