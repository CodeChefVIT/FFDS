import { Button, Container, Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import { motion } from "framer-motion";

function MainPage() {
	return (
		<motion.div
			className="main-page"
			exit={{ x: "-100vw", transition: { duration: 0.3 } }}
		>
			<Container className="main-page-div">
				<Grid container spacing={0}>
					<Grid item xs={12} sm={7} className="jumbo-div">
						<motion.div
							initial={{ x: "-100vw" }}
							animate={{ x: 0 }}
							transition={{
								// delay: 0.5,
								duration: 0.6,
							}}
						>
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
							<Link to="/login" className="no-deco">
								<Button
									variant="contained"
									color="secondary"
									className="action-btn"
								>
									START NOW
								</Button>
							</Link>
						</motion.div>
					</Grid>
					<Hidden xsDown>
						<Grid item xs={12} sm={5}>
							<motion.div
								className="jumb-img-div"
								initial={{ x: "100vw" }}
								animate={{ x: 0 }}
								transition={{ duration: 0.6 }}
							>
								<img
									src="/assets/main-logo.3c94bc22.png"
									alt="logo"
								/>
							</motion.div>
						</Grid>
					</Hidden>
				</Grid>
			</Container>
		</motion.div>
	);
}

export default MainPage;
