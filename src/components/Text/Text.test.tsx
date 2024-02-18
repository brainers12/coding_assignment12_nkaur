import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  it('renders the text', () => {
    render(<Text>Test Text</Text>);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  // Add more tests as needed...
});
