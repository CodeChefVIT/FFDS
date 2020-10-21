import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<div className="navbar" style={{ flexGrow: 1 }}>
			<AppBar color="primary" position="static">
				<Toolbar className="nav-toolbar">
					<Typography
						variant="h6"
						style={{
							flexGrow: 1,
							fontWeight: "900",
							fontSize: "1.7rem",
						}}
					>
						<Link to="/">FFDS</Link>
					</Typography>
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/signup">Sign Up</NavLink>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
