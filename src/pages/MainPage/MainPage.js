import { Button, Container, Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
	return (
		<Container className="main-page">
			<div className="main-page-div">
				<Grid container spacing={0}>
					<Grid item xs={12} sm={7} className="jumbo-div">
						<div>
							<Typography
								variant="h1"
								color="primary"
								className="jumbo-text"
							>
								FULLY FLEXIBLE DATING SYSTEM
							</Typography>
							<Typography
								variant="h4"
								style={{
									fontWeight: "700",
									marginBottom: "8%",
								}}
							>
								FIND YOUR PERFECT PARTNER
							</Typography>
							<Link
								component={Button}
								variant="contained"
								color="secondary"
								className="action-btn"
								to="/login"
							>
								START NOW
							</Link>
						</div>
					</Grid>
					<Hidden xsDown>
						<Grid item xs={12} sm={5}>
							<div className="jumb-img-div">
								<img
									src="/assets/main-logo.3c94bc22.png"
									alt="logo"
								/>
							</div>
						</Grid>
					</Hidden>
				</Grid>
			</div>
		</Container>
	);
}

export default MainPage;
