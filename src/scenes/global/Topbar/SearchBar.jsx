import { InputBase, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { PropTypes } from 'prop-types';

const SearchBar = ({ colors }) => (
  <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
    <IconButton type="button" sx={{ p: 1 }}>
      <SearchIcon />
    </IconButton>
  </Box>
);

SearchBar.propTypes = {
  colors: PropTypes.oneOf(['colors']).isRequired,
};

export default SearchBar;
