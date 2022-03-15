import styled from "styled-components";
import useIsMobile from "../hooks/useIsMobile";

const AboutPage = styled.div``;

const Bio = styled.div`
	max-width: ${({ isMobile }) => (isMobile ? "100vw" : "50vw")};
`;
const Section = styled.div`
	margin-bottom: 4vh;
	margin-left: 4vw;
`;
const Greeting = styled.h2`
	margin-top: 0;
	margin-left: 2vw;
`;
const IndentedSection = styled(Section)`
	margin-left: 8vw;
`;
const SectionTitle = styled.h3``;
const SectionList = styled.ul``;
const SectionItem = styled.li``;

export default function About() {
	const isMobile = useIsMobile();
	return (
		<AboutPage id="about">
			<Bio isMobile={isMobile}>
				<Greeting>Hello I'm Jois Lee,</Greeting>
				<Section>
					I am a freelance UX Designer with a background in psychology,
					communication, and an extensive experience in design & empathy. I’m
					pursuing a career in UX Design because of its interdisciplinary
					nature: design, tech, and engaging with people.
				</Section>
				<Section>
					I am teachable and eager to continue my immersion in this fascinating
					field.
				</Section>
				<IndentedSection>
					<SectionTitle>Skills:</SectionTitle>
					<SectionList>
						<SectionItem>UX/UI process</SectionItem>
						<SectionItem>Adobe XD</SectionItem>
						<SectionItem>Figma</SectionItem>
						<SectionItem>Webflow</SectionItem>
						<SectionItem>Adobe Photoshop & Illustrator</SectionItem>
						<SectionItem>Adobe Photoshop & Illustrator</SectionItem>
					</SectionList>
				</IndentedSection>
				<IndentedSection>
					<SectionTitle>Gallup Top Five Strengths:</SectionTitle>
					<SectionList>
						<SectionItem>Connectedness</SectionItem>
						<SectionItem>Communication</SectionItem>
						<SectionItem>Empathy</SectionItem>
						<SectionItem>Input</SectionItem>
						<SectionItem>Consistency</SectionItem>
					</SectionList>
				</IndentedSection>
			</Bio>
		</AboutPage>
	);
}
