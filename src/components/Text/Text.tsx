import React from 'react';
import styled from 'styled-components';

export interface TextProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  weight?: string; // You can add more custom props as needed
}

const StyledText = styled.span<TextProps>`
  color: ${props => props.color || 'inherit'};
  font-size: ${props => props.size || 'inherit'};
  font-weight: ${props => props.weight || 'inherit'};
`;

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};
