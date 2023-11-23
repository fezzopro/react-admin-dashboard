import { Box } from '@mui/material';
import Header from '../../components/Shared/Header/Header';
import PieChart from '../../components/Shared/PieChart';
import { mockPieData as data } from '../../data/mockData';

const Pie = () => (
  <Box m="20px">
    <Header title="Pie Chart" subTitle="Customized Simple Pie Chart" />
    <Box height="75vh">
      <PieChart data={data} />
    </Box>
  </Box>
);

export default Pie;
