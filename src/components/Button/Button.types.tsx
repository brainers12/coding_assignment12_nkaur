import React from 'react';

// Define the props that your Button component will accept
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  
  /**
   * What background color to use
   */
  backgroundColor?: string;
  
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Button contents
   */
  label: string;
  
  /**
   * Optional click handler
   */
  onClick?: () => void;
  
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
}

// You can also define a type for possible sizes if you have a predefined set of sizes
export type ButtonSize = 'small' | 'medium' | 'large';

// If you have a predefined set of button variants, you can define an enum for that
export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

// You can extend the ButtonProps with HTML button native props if needed
export type ButtonNativeProps = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
