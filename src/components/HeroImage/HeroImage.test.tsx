import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage', () => {
  it('renders a hero image with caption', () => {
    const src = 'https://via.placeholder.com/600x400';
    const alt = 'A stunning Hero Image';
    const caption = 'This is a hero image caption';
    render(<HeroImage src={src} alt={alt} caption={caption} />);
    const image = screen.getByRole('img');
    const captionElement = screen.getByText(caption);
    expect(image).toHaveAttribute('src', src);
    expect(image).toHaveAttribute('alt', alt);
    expect(captionElement).toBeInTheDocument();
  });
});
