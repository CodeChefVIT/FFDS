import React from "react";
import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";

function MotionRedirect(props) {
	return (
		<motion.div exit="undefined">
			<Redirect {...props} />
		</motion.div>
	);
}

export default MotionRedirect;
