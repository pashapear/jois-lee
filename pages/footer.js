import React from "react";
import styled from "styled-components";
import { DesktopLinks } from "../components/Navigation";
import { PageContent } from "../components/common";

const FooterWrapper = styled(PageContent)`
	display: flex;
	justify-content: space-around;
`;
export const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<FooterWrapper>
			<p>© {JSON.stringify(year)} Jois Lee</p>
			<DesktopLinks />
			<p onClick={() => window.scrollTo(0, 0)} style={{ cursor: "pointer" }}>
				Back to Top
			</p>
		</FooterWrapper>
	);
};
