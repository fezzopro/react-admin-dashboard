import { Box } from '@mui/material';
import LineChart from '../../components/Shared/LineChart';
import Header from '../../components/Shared/Header/Header';
import { mockLineData as data } from '../../data/mockData';

const Line = () => (
  <Box m="20px">
    <Header title="Line Chart" subTitle="Customized Simple Line Chart" />
    <Box height="75vh">
      <LineChart data={data} />
    </Box>
  </Box>
);

export default Line;
