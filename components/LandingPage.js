import styled from "styled-components";
import { BlackButton, ClearButton } from "./Button";

const LandingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	max-width: 40rem;
`;
const Title = styled.h1`
	max-width: 27rem;
	margin-top: 6rem;
	margin-bottom: 0;
`;
const Blurb = styled.h4`
	font-weight: normal;
	line-height: 150%;
	margin-top: 1rem;
	margin-bottom: 2rem;
`;
const Buttons = styled.div`
	display: flex;
	gap: 0.75rem;
`;

export const LandingPage = () => {
	return (
		<LandingWrapper>
			<Title>Jois Lee = UX Designer</Title>
			<Blurb>
				Using Empathy and Systematic thinking to create intuitive products
				enjoyable to users
			</Blurb>
			<Buttons>
				<BlackButton onClick={() => console.log("Hi")}>Say Hi</BlackButton>
				<ClearButton>Discover My Works</ClearButton>
			</Buttons>
		</LandingWrapper>
	);
};
