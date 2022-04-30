import React from "react";
import styled from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";
import { PageContent } from "../common";
import { ScrollTarget } from "../ScrollTarget";

const Wrapper = styled(PageContent)`
	display: flex;
	flex-direction: column;
	position: relative;
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
		<Wrapper>
			<ScrollTarget id="contact" offset={50} />
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
