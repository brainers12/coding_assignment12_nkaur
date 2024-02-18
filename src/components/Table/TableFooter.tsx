import React from 'react';

export interface TableFooterProps {
  children: React.ReactNode;
}

export const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <tfoot>{children}</tfoot>;
};
