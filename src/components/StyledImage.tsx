import Image, { StaticImageData } from "next/image";

export const StyledImage: React.FC<{ src: string | StaticImageData; alt: string; }> = (props) => {
    const isString = typeof props.src === 'string'
    return (
      <Image {...props} style={{
        height: 'auto',
        width: '100%',
      }} />
    )
  }