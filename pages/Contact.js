import React from "react";
import styled from "styled-components";
import useIsMobile from "../hooks/useIsMobile";
import { CONTACT_ROUTE } from "../constants/routes";
import { PageContent } from "../components/common";

const Wrapper = styled(PageContent)`
	display: flex;
	flex-direction: column;
`;

export const Links = styled.div`
	padding: 5rem 0 10rem 16.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	a {
		text-decoration: underline;
	}
	a,
	p {
		font-size: large;
	}
	u {
		text-decoration: none;
	}
`;

export const Contact = () => {
	const isMobile = useIsMobile();
	return (
		<Wrapper id="contact">
			<Links isMobile={isMobile}>
				<h1>and more...</h1>
				<a href="" target="#">
					medium
				</a>
				<a href="" target="#">
					instagram
				</a>
				<a href="" target="#">
					twitter
				</a>
				<a href="" target="#">
					linkedin
				</a>
				<p>
					<u>email</u>:{" "}
					<a href="mailto: joisdahee@gmail.com">joisdahee@gmail.com</a>
				</p>
			</Links>
		</Wrapper>
	);
};
