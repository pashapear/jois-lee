import styled from "styled-components";
import useIsMobile from "../hooks/useIsMobile";
import { BlackButton, ClearButton } from "./Button";

const PROJECTS = [
	{
		id: 1,
		name: "LinkedIn Features",
		bullets: ["UX Research", "UX Design"],
		description:
			"Making the search for jobs and candidates as smooth and fair as possible for both end users"
	},
	{
		id: 2,
		name: "Planta App Redesign",
		bullets: ["UX Research", "UI Design", "UX Design"],
		description:
			"Reimagining Planta, a mobile plant care app by designing features for a holistic user experience"
	},
	{
		id: 3,
		name: "Pasha Pear",
		bullets: ["Art Direction", "Illustration", "Photography"],
		description:
			"With their music as inspiration, I dialed in the visual direction for an independent musician"
	},
	{
		id: 4,
		name: "M____",
		bullets: ["UX Design", "UI Design", "No-Code Dev"],
		description:
			"Designed, built, and launched a fully working site for an independent business"
	}
];
const Cards = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5rem;
	width: 100%;
	margin-top: 45vh;
`;

const CardWrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	border: 2px solid black;
	border-radius: var(--radius-l);
`;
const CardImage = styled.div`
	background-color: lightcoral;
	border-radius: var(--radius-l) var(--radius-l) 0 0;
`;
const CardContent = styled.div`
	padding: 2rem;
	display: grid;
	column-gap: 1rem;
	justify-content: center;
	grid-template-columns: ${({ isMobile }) =>
		isMobile ? "1fr 3fr" : "1fr 4fr 1fr"};
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
const CardTitle = styled.h3`
	grid-area: title;
`;
const CardBullets = styled.div`
	grid-area: bullets;
`;
const CardBullet = styled.p`
	font-size: medium;
`;
const CardDescription = styled.p`
	grid-area: description;
	max-width: 50rem;
	margin-bottom: 1rem;
	font-size: large;
`;
const CardIndex = styled.h1`
	grid-area: index;
	font-size: ${({ isMobile }) => (isMobile ? "5rem" : "10rem")};
	font-family: "Poppins", sans-serif;
`;
const CardButtons = styled.div`
	grid-area: buttons;
	display: flex;
	max-height: 2.375rem;
	gap: 1rem;
`;

const Card = ({ id, name, bullets, description }) => {
	const isMobile = useIsMobile();
	return (
		<CardWrapper>
			<CardImage></CardImage>
			<CardContent isMobile={isMobile}>
				<CardTitle>{name}</CardTitle>
				<CardBullets>
					{bullets.map((bullet) => (
						<CardBullet>{bullet}</CardBullet>
					))}
				</CardBullets>
				<CardDescription>{description}</CardDescription>
				<CardIndex isMobile={isMobile}>0{id}</CardIndex>
				<CardButtons>
					<BlackButton>Read more</BlackButton>
					{!isMobile && <ClearButton>Download full case study</ClearButton>}
				</CardButtons>
			</CardContent>
		</CardWrapper>
	);
};

export const ProjectCards = () => {
	return (
		<Cards id="work">
			{PROJECTS.map((project) => (
				<Card key={project.id} {...project} />
			))}
		</Cards>
	);
};
