import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table} from './Table'; 
import { TableFooter } from './TableFooter';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

describe('Table', () => {
  it('renders the table with header, row, cell, and footer', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Header</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Data')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
