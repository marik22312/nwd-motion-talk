import React, { useState } from 'react';
import { CodeBlock } from "react-code-blocks";
import { motion } from 'framer-motion'

const SlideSix = () => {
  return (
    <div>
      <h1>enter framer!</h1>
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
                      <input type="range" value={x} onChange={(e) => setX(parseInt(e.target.value, 10))} />
                      x
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
            wrapLongLines={false} />
        </div>
        <div>
          <Example />
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
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
      </div>
      <div className="inputs">
        <input type="range" value={x} onChange={(e) => setX(parseInt(e.target.value, 10))} />
        x
        <input type="range" value={y} onChange={(e) => setY(parseInt(e.target.value, 10))} />
        y
        <input type="range" value={rotate} onChange={(e) => setRotate(parseInt(e.target.value, 10))} min={-180} max={180} />
        rotate
      </div>
    </div>
  )
}
export default SlideSix