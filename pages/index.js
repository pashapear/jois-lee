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

const Buttons = styled.div`
	display: flex;
	gap: 0.75rem;
`;

const Button = styled.button`
	cursor: pointer;
	background-color: black;
	border-radius: var(--radius);
	border: 1px solid black;
	color: white;
	padding: 0.75rem 1.75rem;
`;

const ButtonClear = styled(Button)`
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
				<Button onClick={() => console.log("Hi")}>Say Hi</Button>
				<ButtonClear>Discover My Works</ButtonClear>
			</Buttons>
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
