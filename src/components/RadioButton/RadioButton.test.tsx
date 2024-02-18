import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('renders correctly', () => {
    render(
      <RadioButton
        id="radio-test"
        name="test"
        value="test-value"
        checked={false}
        onChange={() => {}}
      />
    );
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).not.toBeChecked();
  });

  it('can be selected', () => {
    const handleChange = jest.fn();
    render(
      <RadioButton
        id="radio-test"
        name="test"
        value="test-value"
        checked={false}
        onChange={handleChange}
      />
    );
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalled();
  });
});
