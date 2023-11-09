import {
  Box, useTheme,
} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../../theme';
import SearchBar from './SearchBar';
import TopBarIcons from './TopBarIcons';
import './topbar.scss';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box className="top-bar">
      {/* SEARCH BAR */}
      <SearchBar colors={colors} />

      {/* ICONS */}
      <TopBarIcons toggleColorMode={toggleColorMode} theme={theme} />
    </Box>
  );
};

export default Topbar;
