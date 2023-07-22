import { PropsWithChildren } from "react";

export const AbsoluteDiv: React.FC<{ top: string; left: string; width?: string; } & PropsWithChildren> = (props) => {
    return (
      <div style={{
        position: 'absolute',
        top: props.top,
        left: props.left,
        width: props.width,
      }}>{props.children}</div>
    )
  }