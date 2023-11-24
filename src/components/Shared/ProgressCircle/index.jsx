import { Box, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { tokens } from '../../../theme';

const ProgressCircle = ({ progress = '0.17', size = '40' }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

ProgressCircle.propTypes = {
  progress: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default ProgressCircle;
