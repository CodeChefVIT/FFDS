import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import { AnimatePresence } from "framer-motion";
import Signup from "./pages/Signup/Signup";

function App() {
	const location = useLocation();

	return (
		<div className="App">
			<Navbar />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/signup" component={Signup} />
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
