
import React from 'react';
import { CodeBlock as _CodeBlock, atomOneDark } from 'react-code-blocks';

export const CodeBlock: React.FC<{ text: string }> = (props) => {
    return (
        <_CodeBlock
            wrapLongLines={false}
            startingLineNumber={0}
            text={props.text}
            language={'tsx'}
            theme={atomOneDark}
        />
    )
}