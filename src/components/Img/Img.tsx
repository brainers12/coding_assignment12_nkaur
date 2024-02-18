import React from 'react';

export interface ImgProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
}

export const Img: React.FC<ImgProps> = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};
