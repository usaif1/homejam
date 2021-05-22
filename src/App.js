//dependencies
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//imports
import Routes from "./Routes";

const theme = createMuiTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
