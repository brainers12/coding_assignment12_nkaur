import React from 'react';

export interface TableCellProps {
  children: React.ReactNode;
}

export const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <td>{children}</td>;
};
