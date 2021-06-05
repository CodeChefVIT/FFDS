import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#ec3e73",
		},
		secondary: {
			main: "#983086",
		},
	},
	typography: {
		fontFamily: "Inter",
	},
});

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
