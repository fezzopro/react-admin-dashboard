import { Box, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { tokens } from '../../../theme';
import ProgressCircle from '../ProgressCircle';

const StatBox = ({
  title, subTitle, icon, progress, increase,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          sx={{ color: colors.greenAccent[500] }}
        >
          {subTitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

StatBox.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  increase: PropTypes.string.isRequired,
};

export default StatBox;
