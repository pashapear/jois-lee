import styled, { keyframes } from "styled-components";
import Image from "next/image";
import useIsMobile from "../../hooks/useIsMobile";
import {
	PageContent,
	List,
	Item,
	ItemImage,
	ItemText,
	Title,
	TitleSection
} from "../common";
import { ScrollTarget } from "../ScrollTarget";

const PageSection = styled(PageContent)`
	position: relative;
	overflow: hidden;
`;

const AboutPage = styled(PageSection)`
	padding-bottom: 10rem;

	@media (max-width: 768px) {
		padding-left: 0;
		justify-content: center;
	}
`;

const AlterEgo = styled(PageSection)`
	background-color: black;
	color: white;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

// const HelloCircleImgBlack = styled.img`
// 	position: absolute;
// 	bottom: -12rem;
// 	right: -8rem;
// 	animation: ${rotate} 60s linear infinite;
// `;

const HelloCircleImgWhite = styled.img`
	position: absolute;
	top: -12rem;
	right: -8rem;
	animation: ${rotate} 60s linear infinite;
`;

const Content = styled.div`
	padding-left: ${({ isMobile }) => (isMobile ? "5vw" : "25vw")};
	max-width: ${({ isMobile }) => (isMobile ? "90vw" : "50vw")};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
`;
const Overview = styled.h5`
	max-width: 42rem;
	font-size: ${({ isMobile }) => (isMobile ? "x-large" : "unset")};
`;
const Section = styled.div`
	max-width: 47rem;
	font-size: medium;
`;

const hobbies = [
	{
		name: "Podcast",
		img: { src: "/images/hobbies/podcast.svg", width: 53, height: 90 },
		text: `Cohosting a podcast, “Non-Fiction Relationships”`
	},
	{
		name: "Plants",
		img: { src: "/images/hobbies/plants.svg", width: 64, height: 100 },
		text: "Communing and caring for my plants"
	},
	{
		name: "Blog",
		img: { src: "/images/hobbies/blog.svg", width: 78, height: 80 },
		text: "Writing poetry or my UX Blog"
	},
	{
		name: "Cooking",
		img: { src: "/images/hobbies/cooking.svg", width: 109, height: 110 },
		text: "Cooking for family & friends"
	},
	{
		name: "Nature",
		img: { src: "/images/hobbies/nature.svg", width: 83, height: 81 },
		text: "Walking/hiking in nature"
	},
	{
		name: "Mindfulness",
		img: { src: "/images/hobbies/bath.svg", width: 100, height: 57 },
		text: "Practicing mindfulness"
	}
];

export default function About() {
	const isMobile = useIsMobile();
	return (
		<>
			<AboutPage>
				<ScrollTarget id="about" offset={-200} />
				<Content isMobile={isMobile}>
					<Overview isMobile={isMobile}>
						Jois is a UI/UX Designer from South Korea, passionate about creating
						meaningful experiences for the user.
					</Overview>
					<Section>
						Currently based in Chicago, I’ve been working in the tech industry
						since graduating from university, where I studied psychology and
						communication. I value work that is useful or makes a positive
						impact in real life. I strive to solve problems using a human
						centered design approach.
					</Section>
					<Section>
						From digital shops to brick and mortar organizations - I’ve worked
						across different digital platforms and delivered a number of
						websites, apps & products.
					</Section>
					<Section>
						Check out some of my work and get in touch for a chat over a cup of
						tea.
					</Section>
				</Content>
				{/* {!isMobile && (
					<HelloCircleImgBlack
						key="hello-black"
						src="/images/hello-black.svg"
						alt="Hello!"
					/>
				)} */}
			</AboutPage>
			<AlterEgo>
				{!isMobile && (
					<HelloCircleImgWhite
						key="hello-white"
						src="/images/hello.svg"
						alt="Hello!"
					/>
				)}
				<TitleSection isMobile={isMobile}>
					<Title style={{ paddingLeft: "0" }} isMobile={isMobile}>
						alter ego
					</Title>
					<Section>{`When I’m not working, you can find me...`}</Section>
				</TitleSection>
				<List style={{ gap: "5rem" }} isMobile={isMobile}>
					{hobbies.map((item, i) => (
						<Item
							style={{
								gap: "2.5rem",
								gridTemplateColumns: isMobile ? "1fr" : "15rem 30rem"
							}}
							isMobile={isMobile}
							key={item.name}
						>
							<ItemImage
								style={{ justifyContent: isMobile ? "center" : "flex-end" }}
							>
								<Image
									alt={item.name}
									src={item.img.src}
									width={item.img.width}
									height={item.img.height}
								/>
							</ItemImage>
							<ItemText>{item.text}</ItemText>
						</Item>
					))}
				</List>
			</AlterEgo>
		</>
	);
}
