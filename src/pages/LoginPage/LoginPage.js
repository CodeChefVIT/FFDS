import React from "react";
import { motion } from "framer-motion";

function LoginPage() {
	return (
		<motion.div
			className="login-page"
			initial={{ x: "100vw" }}
			animate={{ x: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div>hello</div>
		</motion.div>
	);
}

export default LoginPage;
