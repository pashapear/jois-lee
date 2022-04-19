import React from "react";
import styled from "styled-components";
import useIsMobile from "../hooks/useIsMobile";
import { Projects } from "./projects";
import { LandingPage } from "./landing";
import { Logos } from "./logos";
import About from "./about";
import { Contact } from "./contact";
import { Footer } from "./footer";

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
