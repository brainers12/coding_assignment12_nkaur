import React from 'react';

export interface HeroImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, caption }) => {
  return (
    <div className="hero-image-container">
      <img src={src} alt={alt} className="hero-image" />
      {caption && <p className="hero-image-caption">{caption}</p>}
    </div>
  );
};
