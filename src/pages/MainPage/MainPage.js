import { Container, Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import "./MainPage.css";

function MainPage() {
	return (
		<Container className="main-page">
			<div className="main-page-div">
				<Grid container spacing={0}>
					<Grid item xs={12} sm={6} className="jumbo-div">
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
								style={{ fontWeight: "700" }}
							>
								FIND YOUR PERFECT PARTNER
							</Typography>
						</div>
					</Grid>
					<Hidden xsDown>
						<Grid item xs={12} sm={6}>
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
