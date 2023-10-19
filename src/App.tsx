import React from "react";
import './index.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Router} from "./components/Router/Router";

import {theme} from "./components/Theme/theme";
import {ThemeProvider} from "@mui/system";

const App:React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router/>
        </ThemeProvider>
    )
}

export default App
