import * as React from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';

const key = 'Compact Table';

const LeaderBoardTable = ({ users }) => {
  const data = { nodes: users };

  const theme = useTheme(getTheme());

  const COLUMNS = [
    { label: 'Player', renderCell: (item) => item.userName },
    //{ label: 'Score %', renderCell: (item) => Math.floor((item.wins/item.played)*100)}
    { label: 'Score %', renderCell: (item) => item.winRate},
  ];

  return <CompactTable columns={COLUMNS} data={data} theme={theme} />;
};

export default LeaderBoardTable;
