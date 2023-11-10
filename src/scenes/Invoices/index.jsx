import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import Header from '../../components/Shared/Header/Header';
import { mockDataInvoices } from '../../data/mockData';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    {
      field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell',
    },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => (
        <Typography
          color={colors.greenAccent[500]}
        >
          $
          {params.row.cost}
        </Typography>
      ),
    },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header
        title="INVOICES"
        subTitle="List of Past Invoices"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell':
          {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeader':
          {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller':
          {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer':
          {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root':
          {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 25, page: 0 },
            },
          }}
          pageSizeOptions={[5, 10, 25, 50, 100]}
        />
      </Box>

    </Box>
  );
};

export default Invoices;
