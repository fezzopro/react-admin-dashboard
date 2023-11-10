import { Box } from '@mui/material';
import Header from '../../components/Shared/Header/Header';

const Dashboard = () => (
  <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header
        title="DASHBOARD"
        subTitle="Welcome to your dashboard"
      />
    </Box>
  </Box>
);

export default Dashboard;
