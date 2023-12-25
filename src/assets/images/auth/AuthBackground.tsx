// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

import background from 'assets/images/auth.png';

// types
import { ThemeDirection, ThemeMode } from 'types/config';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'absolute',
        filter: 'blur(3px)',
        zIndex: -1,
        bottom: 0,
        transform: theme.direction === ThemeDirection.RTL ? 'rotate(180deg)' : 'inherit'
      }}
    >
      <img
        src={theme.palette.mode === ThemeMode.DARK ? background : background}
        alt="Background"
        style={{ width: '100vw', height: '100vh' }}
      />
    </Box>
  );
};

export default AuthBackground;
