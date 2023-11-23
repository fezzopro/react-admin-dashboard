import { Box, useTheme } from '@mui/material';
import GeographyChart from '../../components/Shared/Geography';
import Header from '../../components/Shared/Header/Header';
import { mockGeographyData as data } from '../../data/mockData';
import { tokens } from '../../theme';

console.log(GeographyChart);
const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Geography Chart" subTitle="Customized Simple Geography Chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <GeographyChart data={data} />
      </Box>
    </Box>
  );
};

export default Geography;
