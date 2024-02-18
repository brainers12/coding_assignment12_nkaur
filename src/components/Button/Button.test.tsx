import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders Button component', () => {
  render(<Button>Test Button</Button>);
  expect(screen.getByText('Test Button')).toBeVisible();
});

test('Button has correct disabled state', () => {
  render(<Button disabled>Disabled Button</Button>);
  const button = screen.getByText('Disabled Button');
  expect(button).toBeDisabled();
});
