import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
`;

const logoSize = "3.5rem";
const SvgLogo = styled.svg`
	height: ${logoSize};
	width: ${logoSize};
	animation: ${rotate} 40s linear infinite;
	cursor: pointer;
`;

export const NavIcon = () => (
	<SvgLogo
		xmlns="http://www.w3.org/2000/svg"
		width="1438"
		height="1438"
		fill="none"
		viewBox="0 0 1438 1438"
		onClick={() => window.scrollTo(0, 0)}
	>
		<circle
			cx="869"
			cy="173"
			r="125"
			stroke="#9B1212"
			strokeWidth="50"
		></circle>
		<path
			stroke="#9B1212"
			strokeWidth="50"
			d="M336 390.5c0 82.843 67.157 150 150 150s150-67.157 150-150V23M837 1117h202v227M575 1117h192.5v151m0 151v-151m0 0H575M532 736v301H283m-188 0h188m0 0V736"
		></path>
		<path stroke="#9B1212" strokeWidth="50" d="M1110 129L1110 604"></path>
		<path
			stroke="#9B1212"
			strokeWidth="50"
			d="M1023.43 558.765C920.227 514.273 797 601.617 797 725.906c0 124.289 84.4 210.8 189.974 195.298 67.176-9.863 100.956-41.227 140.856-115.148 39.91-73.921 36.44-193.304 149.46-214.952 75.72-14.503 134.71 51.942 134.71 134.802 0 82.859-60.31 132.402-134.71 132.402"
		></path>
		<circle
			cx="719"
			cy="719"
			r="694"
			stroke="#9B1212"
			strokeWidth="50"
		></circle>
	</SvgLogo>
);
