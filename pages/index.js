import styled from "styled-components";
import useIsMobile from "../hooks/useIsMobile";
// import Link from "next/link";
import { Projects } from "../components/Projects";
import { LandingPage } from "../components/LandingPage";

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
		</Wrapper>
	);
}
