import React from "react";
import styled from "styled-components";
import useIsMobile from "../hooks/useIsMobile";
import { Projects } from "../components/pages/projects";
import { LandingPage } from "../components/pages/landing";
import { Logos } from "../components/pages/logos";
import About from "../components/pages/about";
import { Contact } from "../components/pages/contact";
import { Footer } from "../components/pages/footer";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function Home() {
	const isMobile = useIsMobile();
	return (
		<Wrapper isMobile={isMobile}>
			<LandingPage />
			<Projects />
			<Logos />
			<About />
			<Contact />
			<Footer />
		</Wrapper>
	);
}
