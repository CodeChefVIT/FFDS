import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage.js";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/signup" component={MainPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
