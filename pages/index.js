import styled from "styled-components";

const Title = styled.h1`
	margin-bottom: 4vh;
`;
const Blurb = styled.h2`
	font-weight: normal;
	max-width: 75vw;
	@media (min-width: 1024px) {
		max-width: 50vw;
	}
`;

export default function Home() {
	return (
		<>
			<Title>Jois Lee - UX Designer</Title>
			<Blurb>
				Lifelong learner with a creative mind. Internationally minded UX
				designer with focus on people and processes.
			</Blurb>
		</>
	);
}
