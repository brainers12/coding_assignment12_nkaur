import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  it('renders correctly', () => {
    render(<Dropdown id="test-dropdown" value="option1" onChange={() => {}} options={mockOptions} />);
    expect(screen.getByDisplayValue('Option 1')).toBeInTheDocument();
  });

  it('handles change', () => {
    const handleChange = jest.fn();
    render(<Dropdown id="test-dropdown" value="option1" onChange={handleChange} options={mockOptions} />);
    fireEvent.change(screen.getByDisplayValue('Option 1'), { target: { value: 'option2' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
