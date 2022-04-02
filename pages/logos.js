import styled from "styled-components";
import Image from "next/image";

const logos = [
	{
		name: "Zip",
		img: { src: "/logos/zip-logo.svg", width: 296, height: 37 },
		text: "Logo for a Korean online furniture store. I chose this font to reflect minimalism and airiness of the brand. The first three characters make up the word “home” in Korean and is pronounced as jip. I twisted the pronounciation tad bit to zip as a play on words with home and zipcode."
	},
	{
		name: "Bridge 2 Freedom",
		img: { src: "/logos/b2f-logo.svg", width: 192, height: 190 },
		text: "Bridge 2 Freedom is a residential nonprofit reentry program that provides mentoring, job readiness, life skills training to incarcerated individuals during their release process. I chose this font to signify seriousness, resilience, and strength of those making a conscious decision of embracing a second chance. I wrapped the text using a shape of a bridge reflected on the bottom, to signify the making of different choices from the past."
	},
	{
		name: "Jois Lee UX",
		img: { src: "/logos/jois-logo.svg", width: 186, height: 186 },
		text: "This is the first rendition of my personal brand for my more playful creative endeavors. I used the letters of my name to create a silly smiley face using brighter, saturated colors to bring the feeling of lightheartedness, playfulness; while using this font to show structure and organization."
	},
	{
		name: "The Flora",
		img: { src: "/logos/flora-logo.svg", width: 126, height: 70 },
		text: "The Flora is a product photography studio that combined their love of photography and plants. As the product and plants can vary in color or topic, I chose to use a simple, elegant  font in black, as to not compete with the photography. In addition, the letters H and L combined creates an outline of a vase filled with  water."
	}
];
const Wrapper = styled.div`
	padding: 5rem 0;
`;
const LogosWrapper = styled.div`
	padding: 5rem 15rem;
	display: flex;
	flex-direction: column;
	gap: 10rem;
`;
const LogoWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 10rem;
	gap: 1rem;
`;
const ImageWrapper = styled.div`
	max-width: 24.375rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
const TextWrapper = styled.div`
	font-size: medium;
	display: flex;
	align-items: center;
`;

export const Logos = () => {
	return (
		<Wrapper id="etc">
			<h3>Logos</h3>
			<LogosWrapper>
				{logos.map((logo, i) => (
					<LogoWrapper>
						<ImageWrapper>
							<Image
								alt={logo.name}
								src={logo.img.src}
								width={logo.img.width}
								height={logo.img.height}
							/>
						</ImageWrapper>
						<TextWrapper>{logo.text}</TextWrapper>
					</LogoWrapper>
				))}
			</LogosWrapper>
		</Wrapper>
	);
};
