import React from "react";
import { motion } from "framer-motion";
import "./LoginPage.css";
import {
	Button,
	Container,
	Grid,
	TextField,
	Typography,
} from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { useForm } from "react-hook-form";

function LoginPage() {
	const { register, handleSubmit } = useForm();

	const submitForm = async (data) => {
		console.log(data);
	};

	return (
		<motion.div
			className="login-page"
			initial={{ x: "100vw" }}
			animate={{ x: 0 }}
			transition={{ type: "spring", stiffness: 100 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
		>
			<Grid container spacing={0} style={{ height: "100%" }}>
				<Grid item sm={12} md={5} className="login-section">
					<form
						onSubmit={handleSubmit(submitForm)}
						className="login-form"
					>
						<TextField
							variant="outlined"
							name="name"
							inputRef={register}
							placeholder="Name"
							// style={{ backgroundColor: "white" }}
							InputProps={{
								style: {
									color: "black",
									fontWeight: "bold",
									backgroundColor: "white",
								},
							}}
						/>
						<Button
							variant="contained"
							color="primary"
							className="action-btn"
							type="submit"
						>
							SUBMIT
						</Button>
					</form>
				</Grid>
				<Grid item sm={12} md={7} className="login-text-section">
					<div className="jumbo-login-text">
						<Typography
							variant="h1"
							color="secondary"
							className="jumbo-text"
						>
							JOIN VIT'S ONLY DATING PLATFORM
						</Typography>
						<Typography
							variant="h6"
							className="login-secondary-text"
						>
							GET MATCHED WITH OTHER USERS BASED ON YOUR TIME
							TABLE!{" "}
							<ArrowBackIos
								style={{
									marginLeft: "20px",
								}}
							/>
						</Typography>
						<Typography
							variant="h6"
							className="login-secondary-text"
						>
							CHAT AND INTERACT WITH MACTHED USERS!
							<ArrowBackIos
								style={{
									marginLeft: "20px",
								}}
							/>
						</Typography>
					</div>
				</Grid>
			</Grid>
		</motion.div>
	);
}

export default LoginPage;
