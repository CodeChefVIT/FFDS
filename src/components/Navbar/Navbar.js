import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<div className="navbar" style={{ flexGrow: 1 }}>
			<AppBar color="primary" position="static" elevation={4}>
				<Toolbar className="nav-toolbar">
					<img
						src="/assets/nav-logo.png"
						style={{
							objectFit: "contain",
							height: "30px",
							width: "30px",
							paddingLeft: "4%",
						}}
						alt="logo"
					/>
					<Typography
						variant="h6"
						style={{
							flexGrow: 1,
						}}
					>
						<Link to="/" className="nav-brand">
							FFDS
						</Link>
					</Typography>
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/signup">Sign Up</NavLink>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
