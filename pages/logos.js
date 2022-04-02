import Image from "next/image";
import useIsMobile from "../hooks/useIsMobile";
import {
	PageContent,
	Title,
	List,
	Item,
	ItemImage,
	ItemText
} from "../components/common";

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

export const Logos = () => {
	const isMobile = useIsMobile();
	return (
		<PageContent id="etc">
			<Title isMobile={isMobile}>Logos</Title>
			<List isMobile={isMobile}>
				{logos.map((logo, i) => (
					<Item isMobile={isMobile} key={logo.name}>
						<ItemImage>
							<Image
								alt={logo.name}
								src={logo.img.src}
								width={logo.img.width}
								height={logo.img.height}
							/>
						</ItemImage>
						<ItemText>{logo.text}</ItemText>
					</Item>
				))}
			</List>
		</PageContent>
	);
};
