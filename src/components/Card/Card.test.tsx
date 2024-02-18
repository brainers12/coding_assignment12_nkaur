import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders a card with title, body, and actions', () => {
    const title = 'Test Card';
    const body = 'This is a test card body.';
    render(
      <Card 
        title={title} 
        body={body} 
        actions={<button>Test Action</button>} 
      />
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(body)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /test action/i })).toBeInTheDocument();
  });
});
