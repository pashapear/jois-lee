import React from "react";
import styled from "styled-components";
import { DesktopLinks } from "../components/Navigation";
import { HOME_ROUTE } from "../constants/routes";
import Link from "next/link";
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
			<Link href={HOME_ROUTE}>
				<p style={{ cursor: "pointer" }}>Back to Top</p>
			</Link>
		</FooterWrapper>
	);
};
