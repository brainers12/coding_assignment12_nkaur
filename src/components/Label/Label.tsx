import React from 'react';
import styled from 'styled-components';

// Here we export LabelProps so it can be imported in other files
export interface LabelProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  disabled?: boolean;
}

const StyledLabel = styled.label<Pick<LabelProps, 'color' | 'size' | 'disabled'>>`
  /* Add styles based on props */
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.size || '16px'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Label: React.FC<LabelProps> = ({ children, color, size, disabled }) => (
  <StyledLabel color={color} size={size} disabled={disabled}>
    {children}
  </StyledLabel>
);
