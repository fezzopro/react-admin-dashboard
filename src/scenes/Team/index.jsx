import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { tokens } from '../../theme';
import Header from '../../components/Shared/Header/Header';
import { mockDataTeam } from '../../data/mockData';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell',
    },
    {
      field: 'age', headerName: 'Age', type: 'Number', headerAlign: 'left', align: 'left',
    },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'access',
      headerName: 'Access LEvel',
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={
            access === 'admin'
              ? colors.greenAccent[600]
              : colors.greenAccent[700]
          }
        >
          {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
          {access === 'manager' && <SecurityOutlinedIcon />}
          {access === 'user' && <LockOpenOutlinedIcon />}
          <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
            {access}
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="TEAM"
        subTitle="Managing The Team Members"
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
        }}
      >
        <DataGrid
          rows={mockDataTeam}
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

export default Team;
