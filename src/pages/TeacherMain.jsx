import TeacherPage from '../app/teacher/pages/TeacherPage';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#ff5722',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
  },
});

export default function TeacherMain() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
      </div>
      <TeacherPage />
    </ThemeProvider>
  );
}
