import React from 'react';
import styled from 'styled-components';

// Extend the ButtonProps interface to include backgroundColor
export interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  backgroundColor?: string; // Add this line
}

// Styled component for the button
const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => props.backgroundColor || 'blue'}; // Changed 'defaultColor' to 'blue' as default
  color: ${props => (props.disabled ? '#666' : 'white')};
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  
  &:hover {
    background-color: ${props => (props.disabled ? '#ccc' : 'darkblue')}; // Changed '#0056b3' to 'darkblue'
  }
`;

// Button component
export const Button: React.FC<ButtonProps> = ({ children, disabled, onClick, backgroundColor }) => {
  return (
    <StyledButton disabled={disabled} onClick={disabled ? undefined : onClick} backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
};

// Default export of the Button component
export default Button;
