import { Box, IconButton } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutline';
import { PropTypes } from 'prop-types';

const TopBarIcons = ({ toggleColorMode, theme }) => (
  <Box display="flex">
    <IconButton onClick={toggleColorMode}>
      {theme.palette.mode === 'dark' ? (
        <DarkModeOutlinedIcon />
      ) : (
        <LightModeOutlinedIcon />
      )}
    </IconButton>
    <IconButton>
      <NotificationsOutlinedIcon />
    </IconButton>
    <IconButton>
      <SettingsOutlinedIcon />
    </IconButton>
    <IconButton>
      <PersonOutlinedIcon />
    </IconButton>
  </Box>
);

TopBarIcons.propTypes = {
  theme: PropTypes.oneOf(['theme']).isRequired,
  toggleColorMode: PropTypes.oneOf(['toggleColorMode']).isRequired,
};

export default TopBarIcons;
