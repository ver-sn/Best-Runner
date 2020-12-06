import React from 'react';
import PropTypes from 'prop-types';
import { useTable, useSortBy } from 'react-table';
import StyledTable from './styled';
import { DangerButton, PrimaryButton } from '../../../../shared/styledComponents/Button';

const Table = ({
  columns,
  data,
  onClick,
  onDeleteButtonClick,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  }, useSortBy);

  return (
    <StyledTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted &&
                      column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                    }
                  </span>
                </th>
              ))}
              <th />
              <th />
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                <td>
                  <DangerButton onClick={() => onDeleteButtonClick(row.original.id)}>
                    Удалить
                  </DangerButton>
                </td>
                <td>
                  <PrimaryButton onClick={() => onClick(row)}>Редактировать</PrimaryButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledTable>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default Table;
