import { Box } from '@mui/material';
import Header from '../../components/Shared/Header/Header';
import BarChart from '../../components/Shared/BarChart';
import { mockBarData as data } from '../../data/mockData';

const Bar = () => (
  <Box m="20px">
    <Header title="Bar Chart" subTitle="Customized Simple Bar Chart" />
    <Box height="75vh">
      <BarChart data={data} />
    </Box>
  </Box>
);

export default Bar;
