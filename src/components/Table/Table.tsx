import React from 'react';

export interface TableProps {
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ children }) => {
  return <table>{children}</table>;
};
