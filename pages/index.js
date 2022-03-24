import styled from "styled-components";
import useIsMobile from "../hooks/useIsMobile";
import Link from "next/link";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${({ isMobile }) => (isMobile ? "flex-start" : "flex-end")};
`;

const Title = styled.h1`
	max-width: 35rem;
	margin-top: 6rem;
	margin-bottom: 0;
`;
const Blurb = styled.h5`
	font-weight: normal;
	line-height: 160%;
	max-width: 75vw;
	margin-top: 1rem;
	margin-bottom: 2rem;
	@media (min-width: 1024px) {
		max-width: 50vw;
	}
`;

const LandingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const Cards = styled.div`
	height: 1000px;
	width: 100%;
	/* background-color: black; */
`;

const Buttons = styled.div`
	display: flex;
	gap: 0.75rem;
`;

const BlackButton = styled.button`
	cursor: pointer;
	background-color: black;
	border-radius: var(--radius);
	border: 1px solid black;
	color: white;
	padding: 0.813rem 1.5rem;
`;

const ClearButton = styled(BlackButton)`
	background-color: transparent;
	border-radius: var(--radius);
	color: black;
`;

const Landing = () => {
	return (
		<LandingWrapper>
			<Title>Jois Lee = UX Designer</Title>
			<Blurb>
				Internationally minded UX designer with focus on people and processes.
			</Blurb>
			<Buttons>
				<BlackButton onClick={() => console.log("Hi")}>Say Hi</BlackButton>
				<ClearButton>Discover My Works</ClearButton>
			</Buttons>
		</LandingWrapper>
	);
};

export default function Home() {
	const isMobile = useIsMobile();
	return (
		<Wrapper isMobile={isMobile}>
			<Landing />
			<Cards id="projects" />
		</Wrapper>
	);
}
