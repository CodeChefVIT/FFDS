import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<div className="navbar" style={{ flexGrow: 1 }}>
			<AppBar color="primary" position="static">
				<Toolbar className="nav-toolbar">
					<Typography
						variant="h6"
						style={{ flexGrow: 1, fontWeight: "900" }}
					>
						FFDS
					</Typography>
					<NavLink to="/">Login</NavLink>
					<NavLink to="/">Sign Up</NavLink>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
