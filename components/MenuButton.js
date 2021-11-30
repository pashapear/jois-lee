import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const MenuBtnContainer = styled.div`
	cursor: pointer;
`;

const MenuButton = ({
	isOpen = false,
	strokeWidth = 4,
	color = "#000",
	transition = null,
	lineProps = null,
	...props
}) => {
	const variant = isOpen ? "opened" : "closed";
	const top = {
		closed: {
			rotate: 0,
			translateY: "0rem"
		},
		opened: {
			rotate: 41,
			translateY: "1rem"
		}
	};
	const center = {
		closed: {
			opacity: 1
		},
		opened: {
			opacity: 0
		}
	};
	const bottom = {
		closed: {
			rotate: 0,
			translateY: "0rem"
		},
		opened: {
			rotate: -41,
			translateY: "-1rem"
		}
	};
	lineProps = {
		stroke: color,
		strokeWidth: strokeWidth,
		vectorEffect: "non-scaling-stroke",
		initial: "closed",
		animate: variant,
		transition,
		...lineProps
	};

	return (
		<MenuBtnContainer {...props}>
			<motion.svg
				viewBox="0 0 3rem 1rem"
				overflow="visible"
				preserveAspectRatio="none"
				width="3rem"
				height="1rem"
			>
				<motion.line
					x1="0"
					x2="3rem"
					y1="0"
					y2="0"
					variants={top}
					{...lineProps}
				/>
				<motion.line
					x1="0"
					x2="3rem"
					y1="1rem"
					y2="1rem"
					variants={center}
					{...lineProps}
				/>
				<motion.line
					x1="0"
					x2="3rem"
					y1="2rem"
					y2="2rem"
					variants={bottom}
					{...lineProps}
				/>
			</motion.svg>
		</MenuBtnContainer>
	);
};

export { MenuButton };
