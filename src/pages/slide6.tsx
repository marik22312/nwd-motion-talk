import { CodeBlock } from "react-code-blocks";

const SlideSix = () => {
    return (
        <div>
            <h1>enter framer!</h1>
            <p>A powerful React animations librar, from Framer</p>
            <div style={{
                width: '50%',
            }}>
                <CodeBlock
                    text={`<div className="example">
                    <div>
                      <motion.div
                        className="box"
                        animate={{ x, y, rotate }}
                        transition={{ type: "spring" }}
                      />
                    </div>
                    <div className="inputs">
                      <Input value={x} set={setX}>
                        x
                      </Input>
                      <Input value={y} set={setY}>
                        y
                      </Input>
                      <Input value={rotate} set={setRotate} min={-180} max={180}>
                        rotate
                      </Input>
                    </div>
                  </div>`}
                    language="jsx"
                    theme={{
                        mode: 'dark'
                    }}
                    startingLineNumber={0}
                    wrapLongLines={false} />
            </div>
        </div>
    )
}
export default SlideSix