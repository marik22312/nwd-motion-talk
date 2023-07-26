import React from "react";
import style from '../components/CssAnimationDemo.module.scss'
import {CodeBlock} from "react-code-blocks";

const SlideFive = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <div>
                <h1>Animations are hard!</h1>
                <CSSAnimationDemo/>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '33%'}}>
                    <div style={{width: '100%', height: 0, paddingBottom: '96%', position: 'relative'}}>
                        <iframe src="https://giphy.com/embed/13FrpeVH09Zrb2" width="100%" height="100%"
                                style={{position: 'absolute'}} frameBorder="0" className="giphy-embed" allowFullScreen>
                        </iframe>
                    </div>
                    <p>
                        <a href="https://giphy.com/gifs/css-13FrpeVH09Zrb2">via GIPHY</a></p>
                </div>
            </div>
        </div>
    )
}

const CSSAnimationDemo: React.FC = () => {
    return (
        <div>
            <CodeBlock
                wrapLongLines={false}
                startingLineNumber={0}
                text={`@keyframes opacity {
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
                theme={{
                    mode: 'dark',
                }}
            />
            <div className={style.box}/>
        </div>
    )
}
export default SlideFive;