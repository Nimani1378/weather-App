import { indigo } from '@mui/material/colors';
import { amber } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: red,
            divider: red[700],
            background: {
              default: red[900],
              paper: red[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });