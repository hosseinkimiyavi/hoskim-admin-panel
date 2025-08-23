import { ThemeProvider } from "@mui/material/styles";
import { ColorModeContext, useMode } from "./Theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./scenes/global/TopBar"

function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content" >
              <TopBar />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
