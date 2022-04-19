import React from "react";
import styled from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";
import { BlackButton, ClearButton } from "../Button";
import { motion } from "framer-motion";
import {
	LinkedInContent,
	MContent,
	PashaContent,
	PlantaContent
} from "../ExpandedCardContent";

const DownloadButton = () => {
	const isMobile = useIsMobile();
	return (
		<ClearButton>
			<a download href="/files/jois-lee-linkedIn.pdf">
				{isMobile ? "Download PDF" : "Download full case study"}
			</a>
		</ClearButton>
	);
};

const PROJECTS = [
	{
		id: 1,
		name: "LinkedIn Features",
		bullets: ["UX Research", "UX Design"],
		description:
			"Making the search for jobs and candidates as smooth and fair as possible for both end users",
		content: LinkedInContent,
		img: { src: "/images/projects/linkedin-main.jpg", width: 320, height: 320 },
		actionBtn: <DownloadButton />
	},
	{
		id: 2,
		name: "Planta App Redesign",
		bullets: ["UX Research", "UI Design", "UX Design"],
		description:
			"Reimagining Planta, a mobile plant care app by designing features for a holistic user experience",
		content: PlantaContent,
		img: { src: "/images/projects/planta-main.jpg", width: 320, height: 320 }
	},
	{
		id: 3,
		name: "Pasha Pear",
		bullets: ["Art Direction", "Illustration", "Photography"],
		description:
			"With their music as inspiration, I dialed in the visual direction for an independent musician",
		content: PashaContent,
		img: { src: "/images/projects/pasha-main.jpg", width: 320, height: 320 }
	},
	{
		id: 4,
		name: "M____",
		bullets: ["UX Design", "UI Design", "No-Code Dev"],
		description:
			"Designed, built, and launched a fully working site for an independent business",
		content: MContent,
		img: { src: "/images/projects/m-main.png", width: 1230, height: 320 }
	}
];

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;
	width: 100%;
	margin-top: 45vh;
	padding: 5rem 0;
`;

const MotionDiv = styled(motion.div).attrs({
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 }
})``;

const CardWrapper = styled(motion.div)`
	position: relative;
	width: 95vw;
	max-width: 80rem;
	display: flex;
	flex-direction: column;
	border: 2px solid black;
	border-radius: var(--radius-l);
`;

const CardImage = styled(motion.div)`
	position: relative;
	height: 15rem;
	border-radius: var(--radius) var(--radius) 0 0;
	overflow: hidden;
	background: url(${({ imageUrl }) => imageUrl}) no-repeat center center;
	background-size: cover;
`;
const CardContent = styled(MotionDiv)`
	padding: 2rem;
	display: grid;
	column-gap: 1rem;
	justify-content: center;
	grid-template-columns: ${({ isMobile }) =>
		isMobile ? "1fr 3fr" : "2fr 6fr 1fr"};
	grid-template-rows: repeat(3, auto);
	grid-template-areas: ${({ isMobile }) => {
		if (isMobile) {
			return `"index title"
					"index description"
					"bullets description"
					"bullets buttons"`;
		} else {
			return `"bullets title index"
					"bullets description index"
					"bullets buttons index"`;
		}
	}};
`;
const CardTitle = styled.h2`
	grid-area: title;
	margin-bottom: 0.75rem;
`;
const CardBullets = styled.div`
	grid-area: bullets;
	padding-top: ${({ isMobile }) => (isMobile ? 0 : "1rem")};
	padding-left: ${({ isMobile }) => (isMobile ? 0 : "2rem")};
`;
const CardBullet = styled.p`
	font-size: medium;
`;
const CardDescription = styled.p`
	grid-area: description;
	max-width: 35rem;
	margin-bottom: 1rem;
	font-size: large;
`;
const CardIndex = styled.h1`
	grid-area: index;
	font-size: ${({ isMobile }) => (isMobile ? "5rem" : "10rem")};
	font-family: "Poppins", sans-serif;
	padding-right: ${({ isMobile }) => (isMobile ? "0" : "5rem")};
`;

const CardButtons = styled(MotionDiv)`
	grid-area: buttons;
	display: flex;
	max-height: 2.375rem;
	gap: 1rem;
`;

const ExpandedContentWrapper = styled(MotionDiv)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;
`;

const ScrollTarget = styled.div`
	position: absolute;
	top: -200px;
	left: 50%;
`;

const Card = ({
	id,
	img,
	actionBtn,
	name,
	bullets,
	description,
	content: ExpandedContent
}) => {
	const isMobile = useIsMobile();
	const [expanded, setExpanded] = React.useState(false);
	const scrollRef = React.useRef(null);

	return (
		<CardWrapper>
			<ScrollTarget ref={scrollRef}></ScrollTarget>
			<CardImage imageUrl={img.src} />
			<CardContent isMobile={isMobile}>
				<CardTitle>{name}</CardTitle>
				<CardBullets isMobile={isMobile}>
					{bullets.map((bullet, idx) => (
						<CardBullet key={idx}>{bullet}</CardBullet>
					))}
				</CardBullets>
				<CardDescription>{description}</CardDescription>
				<CardIndex isMobile={isMobile}>0{id}</CardIndex>
				{!expanded ? (
					<CardButtons>
						<BlackButton onClick={() => setExpanded(true)}>
							Read more
						</BlackButton>
						{actionBtn}
					</CardButtons>
				) : (
					<ExpandedContentWrapper>
						<ExpandedContent />
						<CardButtons>
							<BlackButton
								onClick={() => {
									setExpanded(false);
									scrollRef.current.scrollIntoView();
								}}
							>
								Read less
							</BlackButton>
							{actionBtn}
						</CardButtons>
					</ExpandedContentWrapper>
				)}
			</CardContent>
		</CardWrapper>
	);
};

export const Projects = () => {
	return (
		<Wrapper id="work">
			{PROJECTS.map((project) => (
				<Card key={project.id} {...project} />
			))}
		</Wrapper>
	);
};
