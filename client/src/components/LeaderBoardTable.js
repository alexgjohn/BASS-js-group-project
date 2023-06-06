import * as React from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import styled from 'styled-components';

const key = 'Compact Table';

const LeaderBoardTable = ({ users }) => {
  
  const Table = styled.div`
  max-width: 600px; /* Set a maximum width for the table container */
  margin: 0 auto; /* Center the table horizontally */
  `

  const data = { nodes: users };

  //const theme = useTheme(getTheme());
  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
      margin-right: 25%;
      margin-left: 25%;
      font-family: 'Electrolize', sans-serif;
        color: white;
        // background-color: #eaf5fd;
        background-color:rgb(105, 27, 58)
  
      `,
      Row: `
      margin-right: 25%;
      margin-left: 25%;
      font-family: 'Electrolize', sans-serif;

        &:nth-of-type(odd) {
          color: black;
          background-color: white;
        }

        &:nth-of-type(even) {
          color: white;
          background-color:rgb(155, 87, 93);
        }
      `,
    },
  ]);

  const COLUMNS = [
    { label: 'Player', renderCell: (item) => item.userName },
    { label: 'Score %', renderCell: (item) => item.winRate},
  ];

  return (
  <>
  <Table>
  <CompactTable columns={COLUMNS} data={data} theme={theme} />
  <hr></hr>
  </Table>
  </>
  )
};

export default LeaderBoardTable;
