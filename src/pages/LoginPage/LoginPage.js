import React from "react";
import { motion } from "framer-motion";

function LoginPage() {
	return (
		<motion.div
			className="login-page"
			initial={{ x: "100vw" }}
			animate={{ x: 0 }}
			transition={{ type: "spring", stiffness: 100 }}
			exit={{ opacity: 0, transition: { duration: 0.05 } }}
		>
			<div>hello</div>
		</motion.div>
	);
}

export default LoginPage;
