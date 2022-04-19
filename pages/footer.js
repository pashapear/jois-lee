import React from "react";
import styled from "styled-components";
import { DesktopLinks } from "../components/Navigation";
import { PageContent } from "../components/common";
import useIsMobile from "../hooks/useIsMobile";

const FooterWrapper = styled(PageContent)`
	display: flex;
	justify-content: space-around;
`;
export const Footer = () => {
	const year = new Date().getFullYear();
	const isMobile = useIsMobile();
	return (
		<FooterWrapper>
			<p>© {JSON.stringify(year)} Jois Lee</p>
			{!isMobile && <DesktopLinks />}
			<p onClick={() => window.scrollTo(0, 0)} style={{ cursor: "pointer" }}>
				Back to Top
			</p>
		</FooterWrapper>
	);
};
