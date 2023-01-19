import Appbar from '../components/appbar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/globals.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#A3C7D6',
    },
    secondary: {
      main: '#A3C7D6',
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#A3C7D6'
        },
        notchedOutline: {
          borderColor: '#A3C7D6'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#A3C7D6'
        },
      }
    }
  }
});

export default function App({ Component, pageProps }) {
  return <>
    <ThemeProvider theme={theme}>
      <Appbar />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}
