import styled from "styled-components";
import useIsMobile from "../hooks/useIsMobile";
import { Projects } from "./projects";
import { LandingPage } from "./landing";
import { Logos } from "./logos";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${({ isMobile }) => (isMobile ? "flex-start" : "flex-end")};
`;

export default function Home() {
	const isMobile = useIsMobile();
	return (
		<Wrapper isMobile={isMobile}>
			<LandingPage />
			<Projects />
			<Logos />
		</Wrapper>
	);
}
