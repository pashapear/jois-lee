import React from "react";
import styled from "styled-components";

const ExpandedCardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;
const TwoCol = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;
const TwoColTwoOne = styled(TwoCol)`
	grid-template-columns: 2fr 1fr;
`;
const ColContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const OneCol = styled.div``;
const Section = styled.div``;
const Title = styled.h3`
	color: var(--blue);
`;

export const LinkedInContent = () => {
	return (
		<ExpandedCardContent>
			<TwoCol>
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
				<div>[IMAGE]</div>
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
				<div>[IMAGE]</div>
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
				<div>[IMAGE]</div>
			</TwoCol>
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
				<div>[IMAGE]</div>
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
				<div>[IMAGE]</div>
			</TwoColTwoOne>
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
				<div>[IMAGE]</div>
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
				<div>[IMAGE]</div>
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
		</ExpandedCardContent>
	);
};
