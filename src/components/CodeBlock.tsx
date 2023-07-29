
import React from 'react';
import { CodeBlock as _CodeBlock, dracula } from 'react-code-blocks';

export const CodeBlock: React.FC<{ text: string; language?: string }> = (props) => {
    return (
        <_CodeBlock
            customStyle={{
                fontSize: 19,
            }}
            wrapLongLines={false}
            startingLineNumber={0}
            text={props.text}
            language={props.language ?? 'jsx'}
            theme={dracula}
        />
    )
}