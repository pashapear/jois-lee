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
	padding: 10rem 0 10rem 16.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	@media (max-width: 768px) {
		padding: 5rem 0 10rem 5rem;
	}

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
				<a href="https://joisleeux.medium.com/" target="#">
					medium
				</a>
				<a href="https://www.instagram.com/joisleeux/" target="#">
					instagram
				</a>
				<a href="https://twitter.com/joisleeux" target="#">
					twitter
				</a>
				<a href="https://www.linkedin.com/in/joislee/" target="#">
					linkedIn
				</a>
				<p>
					<u>email</u>:{" "}
					<a href="mailto: joisdahee@gmail.com">joisdahee@gmail.com</a>
				</p>
			</Links>
		</Wrapper>
	);
};
