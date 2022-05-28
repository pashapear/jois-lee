import React from "react";
import styled from "styled-components";
import FsLightbox from "fslightbox-react";

// #region Styled Components
const ExpandedCardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: 40rem;
`;
const TwoCol = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
	align-items: center;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
const TwoColTwoOne = styled(TwoCol)`
	grid-template-columns: 2fr 1fr;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
const ThreeCol = styled(TwoCol)`
	grid-template-columns: repeat(3, 1fr);
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
const ColContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const OneCol = styled.div``;
const Section = styled.div`
	max-width: 15rem;
`;
const Title = styled.h3`
	color: var(--blue);
`;

const BoldSection = styled.div`
	padding: 0 20%;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;
const BoldItem = styled.div`
	padding-left: 2rem;
	border-left: 7px solid black;
	margin-bottom: 2rem;
`;
const ImageTrigger = styled.img`
	width: 100%;
	cursor: pointer;
`;
// #endregion

const Image = ({ src }) => {
	const [toggle, setToggle] = React.useState(false);
	return (
		<>
			<ImageTrigger
				role="button"
				src={src}
				onClick={() => setToggle((prev) => !prev)}
			/>
			<FsLightbox toggler={toggle} sources={[src]} />
		</>
	);
};

export const LinkedInContent = () => {
	return (
		<ExpandedCardContent>
			<TwoCol style={{ alignItems: "flex-start" }}>
				<ColContent>
					<Section>
						<Title>Role</Title>
						<p>
							Role UX Designer, worked in all stages with focus on
							interaction/visual design
						</p>
					</Section>
					<Section>
						<Title>Team</Title>
						<p>Jois Lee</p>
					</Section>
					<Section>
						<Title>Timeline</Title>
						<p>April 2021 - June 2021</p>
					</Section>
				</ColContent>
				<ColContent>
					<Section>
						<Title>Scope</Title>
						<p>
							User Research, Ideation, User Flows, Wireframing, IA, Interaction/
							Visual Design, Prototyping
						</p>
					</Section>
					<Section>
						<Title>Tools</Title>
						<p>Figjam, Figma</p>
					</Section>
				</ColContent>
			</TwoCol>
			<OneCol>
				<Title>Problem</Title>
				<p>
					After conducting user research three main painpoints that both
					applicants and recruiters reported include:
				</p>
				<ol>
					<li>Bias in viewing applicants’ names during recruitment</li>
					<li>Loss of time with insufficient level of automation</li>
					<li>Inability to reuse or move applications to other projects</li>
				</ol>
			</OneCol>
			<OneCol>
				<Title>Solution</Title>
				<p>
					The proposed LinkedIn features aim to help people looking jobs and
					people hiring for them. Job and candidate searching becomes simple and
					seamless through these 3 features:
				</p>
			</OneCol>
			<TwoCol>
				<div>
					<Title>1. Hide names</Title>
					<p>
						Simply blurring the candidates' names on the application page can
						prevent recruiters' subconscious/conscious bias seeping into their
						hiring process.
					</p>
				</div>
				<Image src="/images/projects/linkedin-1.jpg" />
			</TwoCol>
			<TwoCol>
				<div>
					<Title>2. Automate</Title>
					<p>
						During the hiring process, recruiters will have the option to send
						mass rejection emails to candidates who were not hired, saving
						recruiters time and candidates endless waiting.
					</p>
				</div>
				<Image src="/images/projects/linkedin-2.jpg" />
			</TwoCol>
			<TwoCol>
				<div>
					<Title>3. Transfer Application</Title>
					<p>
						Recruiters can easily transfer an application to a job that's a
						better fit. This frees candidate’s time and energy on resubmitting
						an idenitical application, while recruiters have ease of
						transitioning a candidate.
					</p>
				</div>
				<Image src="/images/projects/linkedin-3.jpg" />
			</TwoCol>
		</ExpandedCardContent>
	);
};

export const WinvestContent = () => {
	return (
		<ExpandedCardContent>
			<TwoCol>
				<ColContent>
					<Section>
						<Title>Role</Title>
						<p>Product Designer, UX Researcher, UX/UI Designer</p>
					</Section>
					<Section>
						<Title>Team</Title>
						<p>2 Researchers, 1 Business Consultant, 1 Developer</p>
					</Section>
					<Section>
						<Title>Timeline</Title>
						<p>April 2022</p>
					</Section>
				</ColContent>
				<ColContent>
					<Section>
						<Title>Scope</Title>
						<p>
							User Research, Personas, Ideation, User Flows, Wireframing, IA,
							Interaction/ Visual Design
						</p>
					</Section>
					<Section>
						<Title>Tools</Title>
						<p>Miro, Figma</p>
					</Section>
				</ColContent>
			</TwoCol>
			<OneCol>
				<Title>Background</Title>
				<p>
					70% of women are deemed not financially literate. We wanted to empower
					women/nonbinary folks to become more financially independent and make
					informed financial decisions for their future. Bridging the financial
					literacy gap can be a big task, thus we wanted to make an experience
					approachable and tailored to the individual.
				</p>
			</OneCol>
			<OneCol>
				<Title>User Research</Title>
				<p>After conducting user research we identified two main painpoints</p>
				<ol>
					<li>Lack of direction in how or where to learn about investing</li>
					<li>Sense of community and expertise around investing</li>
				</ol>
			</OneCol>
			<OneCol>
				<Title>Solution</Title>
				<p>
					We decided to create an engaging mobile app that delivers valuable
					finance education to women based on personal needs. Taking into
					consideration the complex nature of the topic, we decided to break
					down the information into bite-sized learning and fun quizzes,
					motivated by earning medals and trophies on the learning journey.
				</p>
			</OneCol>
			<TwoColTwoOne>
				<div>
					<Title>1. Learning Journey</Title>
					<p>
						Our user research showed one of the painpoints for women/NBs was not
						being able to visualize the amount of effort they’ve put into their
						financial learning journeys. To resolve this issue, we went with a
						graph visualisation of cumulative minutes/hours that they’ve spent.
						This would remind the users of how far they’ve come and feel
						encouraged. The user can also access their progress any time by
						drilling down into the cards at the bottom of the screen.
					</p>
				</div>
				<Image src="/images/projects/winvest-1.jpeg" />
			</TwoColTwoOne>
			<TwoColTwoOne>
				<div>
					<Title>2. Bite Sized Learning</Title>
					<p>
						The main hinderances for women/NBs around investing were the amount
						of information and vocabulary involved in learning. Thus we decided
						to have a more organized learning journey that was incremental and
						self-paced. This way, the users could always come back to the topic
						where they left off.
					</p>
				</div>
				<Image src="/images/projects/winvest-2.jpeg" />
			</TwoColTwoOne>
			<ThreeCol>
				<Image src="/images/projects/winvest-4.jpeg" />
				<Image src="/images/projects/winvest-5.jpeg" />
				<Image src="/images/projects/winvest-6.jpeg" />
			</ThreeCol>
		</ExpandedCardContent>
	);
};

export const PlantaContent = () => {
	return (
		<ExpandedCardContent>
			<TwoCol>
				<ColContent>
					<Section>
						<Title>Role</Title>
						<p>UX Designer, worked in all stages with focus on UI</p>
					</Section>
					<Section>
						<Title>Team</Title>
						<p>Jois Lee</p>
					</Section>
					<Section>
						<Title>Timeline</Title>
						<p>January 2022 - March 2022</p>
					</Section>
				</ColContent>
				<ColContent>
					<Section>
						<Title>Scope</Title>
						<p>
							User Research, Personas, Ideation, User Flows, Wireframing, IA,
							Interaction/ Visual Design
						</p>
					</Section>
					<Section>
						<Title>Tools</Title>
						<p>Figjam, Figma</p>
					</Section>
				</ColContent>
			</TwoCol>
			<OneCol>
				<Title>Deep Dives</Title>
				<p>
					After conducting user research two main painpoints that users
					experienced
				</p>
				<ol>
					<li>Lack of platform to share or receive plant cuttings nearby</li>
					<li>Unmet desire for human connection around plants</li>
				</ol>
			</OneCol>
			<OneCol>
				<Title>Solution</Title>
				<p>
					The proposed Planta features are designed to aid app users to have a
					more holistic experience around plant care:
				</p>
			</OneCol>
			<TwoColTwoOne>
				<div>
					<Title>1. Match Making: Plant Sharing</Title>
					<p>
						Inspired by match making apps, instead of matching partners, it’s
						plants to owners. Plant owners can fill out a form with photos,
						general location, and descriptions of the plant; while plant seekers
						can swipe through the catalogue of plants within the distance they
						personally set. Instead of being a “match” however, the difference
						is in the fact that the liked (swiped right) plants will show up in
						a liked list, from which plant seekers can message the plant owner
						to arrange a pick up.
					</p>
				</div>
				<Image src="/images/projects/planta-1.jpg" />
			</TwoColTwoOne>
			<TwoColTwoOne>
				<div>
					<Title>2. Social Media for plant owners</Title>
					<p>
						Having a social media dedicated to plants, where plant owners can
						discuss, ask questions, connect with other plant owners can resolve
						the isolation that was prevalent in user research interviews.
						Housing this feature in conjunction to the first feature of plant
						sharing will foster a more holistic plant app, where one can send
						the plant posting to plant pals without ever having to leave the
						app.
					</p>
				</div>
				<Image src="/images/projects/planta-2.jpg" />
			</TwoColTwoOne>
			<ThreeCol>
				<Image src="/images/projects/planta-3.jpeg" />
				<Image src="/images/projects/planta-4.jpeg" />
				<Image src="/images/projects/planta-5.jpeg" />
			</ThreeCol>
		</ExpandedCardContent>
	);
};

export const PashaContent = () => {
	return (
		<ExpandedCardContent>
			<TwoCol>
				<ColContent>
					<Section>
						<Title>Role</Title>
						<p>Creative director, graphic designer, photographer</p>
					</Section>
					<Section>
						<Title>Team</Title>
						<p>Jois Lee</p>
					</Section>
					<Section>
						<Title>Timeline</Title>
						<p>July 2021 - October 2021</p>
					</Section>
				</ColContent>
				<ColContent>
					<Section>
						<Title>Methods</Title>
						<p>Ideation, Design thinking</p>
					</Section>
					<Section>
						<Title>Tools</Title>
						<p>Illustrator, Photoshop, Camera</p>
					</Section>
				</ColContent>
			</TwoCol>
			<TwoCol>
				<Image src="/images/projects/pasha-1.jpg" />
				<p>
					I chose a field of blue flowers in the woods to represent the feeling
					of innocence and beauty with a hint of darkness. I titled this piece,
					“Death by Flowers” to showcase the unlikely pair of two things, as the
					musician’s album was a trip encompassing cohesion of seemingly
					contradictory sounds. The songs made me feel transported to multiple
					landscapes which is common in dreams, thus, I created a filter that
					was dreamy.
				</p>
			</TwoCol>
			<TwoCol>
				<Image src="/images/projects/pasha-2.jpg" />
				<p>
					When listening to the song, ”Technological unemployment”, I
					immediately saw a rainbow xylophone fluidly rotating in space/vacuum.
				</p>
			</TwoCol>
		</ExpandedCardContent>
	);
};

export const MContent = () => {
	return (
		<ExpandedCardContent>
			<TwoCol>
				<ColContent>
					<Section>
						<Title>Role</Title>
						<p>UX Designer, No-Code Developer</p>
					</Section>
					<Section>
						<Title>Team</Title>
						<p>Jois Lee</p>
					</Section>
					<Section>
						<Title>Timeline</Title>
						<p>July 2021 - October 2021</p>
					</Section>
				</ColContent>
				<ColContent>
					<Section>
						<Title>Methods</Title>
						<p>
							Ideation, Personas, User Research, User journey mapping, User
							story mapping, Prototyping, User Testing
						</p>
					</Section>
					<Section>
						<Title>Tools</Title>
						<p>Miro, Adobe XD, Webflow</p>
					</Section>
				</ColContent>
			</TwoCol>
			<OneCol>
				<p>
					Due to NDA restriction, I cannot disclose all the details of this
					project, but here is a list of high-level overview of what I did
					throughout the project:
				</p>
			</OneCol>
			<OneCol>
				<BoldSection>
					<BoldItem>
						<h3>Creating Personas</h3>
						<p>
							Created personas to meet the user’s needs, experiences, behaviors
							and goals
						</p>
					</BoldItem>
				</BoldSection>
				<BoldSection>
					<BoldItem>
						<h3>Mapping Out User Flows</h3>
						<p>Mapped out end-to-end user journey</p>
					</BoldItem>
				</BoldSection>
				<BoldSection>
					<BoldItem>
						<h3>Designs</h3>
						<p>Designed lofi & hifi wireframes and interactive prototypes</p>
					</BoldItem>
				</BoldSection>
				<BoldSection>
					<BoldItem>
						<h3>No-Code Development</h3>
						<p>Built and shipped fully working product</p>
					</BoldItem>
				</BoldSection>
				<BoldSection>
					<BoldItem>
						<h3>User Testing</h3>
						<p>
							Once the product launched, I conducted user testing with 10 users
						</p>
					</BoldItem>
				</BoldSection>
			</OneCol>
		</ExpandedCardContent>
	);
};
