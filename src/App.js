import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={MainPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
