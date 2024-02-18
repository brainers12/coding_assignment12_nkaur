import React from 'react';
import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img', () => {
  it('renders an image with given src and alt', () => {
    const testSrc = 'https://via.placeholder.com/150';
    const testAlt = 'Placeholder';
    render(<Img src={testSrc} alt={testAlt} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', testSrc);
    expect(image).toHaveAttribute('alt', testAlt);
  });
});
