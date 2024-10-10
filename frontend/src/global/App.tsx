import { useState } from "react";
import { ThemeProvider } from "styled-components";

//themes
import Light from "./styles/theme/light";
//pages
import Route from "./routes/route";

function App() {
  const [theme, setTheme] = useState(Light);

  return (
    <ThemeProvider theme={theme}>
      <Route />
    </ThemeProvider>
  );
}

export default App;
