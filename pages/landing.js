import styled from "styled-components";
import { BlackButton, ClearButton } from "../components/Button";
import Link from "next/link";
import { ABOUT_ROUTE, WORK_ROUTE } from "../components/Navigation";
import useIsMobile from "../hooks/useIsMobile";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: ${({ isMobile }) => (isMobile ? "1fr" : "1fr 1fr")};
	padding: 0 5vw;
`;

const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	max-width: 50rem;
`;
const Title = styled.h1`
	max-width: 27rem;
	margin-top: 6rem;
	margin-bottom: 0;
`;
const Blurb = styled.h2`
	font-size: ${({ isMobile }) => (isMobile ? "1.125" : "1.5rem")};
	font-weight: normal;
	line-height: 150%;
	margin-top: 1rem;
	margin-bottom: 2rem;
	max-width: 45rem;
`;
const Buttons = styled.div`
	display: flex;
	gap: 0.75rem;
`;

export const LandingPage = () => {
	const isMobile = useIsMobile();
	return (
		<Wrapper isMobile={isMobile}>
			{!isMobile && <div></div>}
			<InnerWrapper>
				<Title>Jois Lee = UX Designer</Title>
				<Blurb isMobile={isMobile}>
					Using Empathy and Systematic thinking to create intuitive products
					enjoyable to users
				</Blurb>
				<Buttons>
					<Link href={ABOUT_ROUTE}>
						<BlackButton onClick={() => console.log("Hi")}>Say Hi</BlackButton>
					</Link>
					<Link href={WORK_ROUTE}>
						<ClearButton>Discover My Works</ClearButton>
					</Link>
				</Buttons>
			</InnerWrapper>
		</Wrapper>
	);
};
