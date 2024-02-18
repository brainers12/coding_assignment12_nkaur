import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  it('renders the label', () => {
    render(<Label>Test Label</Label>); // Use children instead of text prop
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('changes appearance when disabled', () => {
    render(<Label disabled>Disabled Label</Label>); // Use children instead of text prop
    const label = screen.getByText('Disabled Label'); // Use screen.getByText instead of destructuring render
    expect(label).toHaveStyle('opacity: 0.5');
  });
});
