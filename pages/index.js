import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1`
	max-width: 30rem;
`;
const Blurb = styled.h4`
	font-weight: normal;
	line-height: 160%;
	max-width: 75vw;
	@media (min-width: 1024px) {
		max-width: 50vw;
	}
`;

const LandingWrapper = styled.div`
	padding-bottom: 2000px;
`;

const Cards = styled.div`
	height: 1000px;
	width: 100%;
	background-color: black;
`;

const Landing = () => {
	return (
		<LandingWrapper>
			<Title>Jois Lee = UX Designer</Title>
			<Blurb>
				Internationally minded UX designer with focus on people and processes.
			</Blurb>
		</LandingWrapper>
	);
};

export default function Home() {
	return (
		<Wrapper>
			<Landing />
			<Cards id="projects" />
		</Wrapper>
	);
}
