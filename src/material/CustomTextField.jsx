import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const CustomTextField = styled(TextField)(({ theme }) =>({
    '& label.Mui-focused': {
      color: theme.palette.text.secondary,
    },
    '& .MuiInput-root:before': {
      borderBottomColor: theme.palette.text.secondary,
    },
    '& .MuiInput-root:after':{
        border : '0'
    },
  }));