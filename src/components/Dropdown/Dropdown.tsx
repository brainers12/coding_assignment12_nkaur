import React from 'react';

export interface DropdownProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
}

export const Dropdown: React.FC<DropdownProps> = ({ id, value, onChange, options }) => {
  return (
    <select id={id} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
