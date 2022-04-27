import { motion } from "framer-motion";
import styled from "styled-components";

export const BlackButton = styled(motion.button).attrs({
	whileHover: { scale: 1.05 },
	whileTap: { scale: 0.95 }
})`
	cursor: pointer;
	background-color: black;
	border-radius: var(--radius);
	border: 1px solid black;
	color: white;
	padding: 0.813rem 1.5rem;
	display: flex;
	align-items: center;
	white-space: nowrap;
	overflow: hidden;
`;

export const ClearButton = styled(BlackButton)`
	background-color: transparent;
	border-radius: var(--radius);
	color: black;
`;
