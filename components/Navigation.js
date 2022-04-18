import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Twirl as MenuButton } from "hamburger-react";
import useIsMobile from "../hooks/useIsMobile";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {
	HOME_ROUTE,
	WORK_ROUTE,
	ETC_ROUTE,
	ABOUT_ROUTE,
	CONTACT_ROUTE
} from "../constants/routes";

const rotate = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(-360deg);
  }
`;

const LOGO_SIZE = 10;

const NavBar = styled(motion.nav)`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: auto;
	padding: 2vh 4vw;
	background: white;
	/* background: rgba(255, 255, 255, 0.8); */
`;

const Logo = styled.path`
	height: ${LOGO_SIZE}vh;
	cursor: pointer;
	animation: ${rotate} 28s linear infinite;
`;
const Links = styled.div`
	display: flex;
	align-items: flex-start;
	column-gap: 4vw;
`;

const LinkWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
`;
const LinkTitle = styled.span`
	cursor: pointer;
	color: ${({ active }) => (active ? "black" : "rgba(0, 0, 0, 0.6)")};
	padding-bottom: ${({ isMobile }) => (isMobile ? 0 : "0.2rem")};
	font-size: ${({ isMobile }) => (isMobile ? "2rem" : "initial")};
	transition: color 800ms;
`;
const ActiveLinkIndicator = styled.div`
	position: absolute;
	top: 2rem;
	background-color: black;
	width: 0.35rem;
	height: 0.35rem;
	border-radius: 50%;
`;
const MobileMenu = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const MobileLinks = styled.div`
	padding-top: 25vh;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;
`;

const MenuButtonWrapper = styled.div`
	z-index: 1;
`;

const NavIcon = () => (
	<svg width={56} height={56} xmlns="http://www.w3.org/2000/svg">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={56}
			height={56}
			viewBox="0 0 1438 1438"
		>
			<path
				d="M687 .6C521.2 9 369.8 69.9 244.8 178.7c-15.6 13.5-52.2 50.1-66.1 66.1C82.7 354.9 23.7 486.2 5.6 630c-4 32.1-5 49.1-5 89 0 41.1 1.1 59.1 5.5 93 18.3 141.2 77.5 272 172.6 381.2 13.5 15.6 50.1 52.2 66.1 66.1 110.1 96 241.4 155 385.2 173.1 32.1 4 49.1 5 89 5 41.1 0 59.1-1.1 93-5.5 141.2-18.3 272-77.5 381.2-172.6 15.6-13.5 52.2-50.1 66.1-66.1 96-110.1 155-241.4 173.1-385.2 4-32.1 5-49.1 5-89 0-41.1-1.1-59.1-5.5-93-18.3-141.3-77.4-271.7-172.5-381.2-14.3-16.4-52.6-54.5-69.4-68.9-14.7-12.6-38.8-31.9-48.8-38.8-3.8-2.7-6.2-5.1-6.2-6.2 0-1.3-.7-1.9-2.5-1.9-1.4 0-9.5-4.7-19.7-11.4C1012.2 51.5 901.8 13.5 778 2.5 761.3 1 703.2-.2 687 .6zm71 50.5c10.2.5 19.1 1.2 19.9 1.5 1 .3.3 1.2-2 3-1.9 1.3-7.2 6.1-11.8 10.7-22 21.7-35.6 46.7-42.2 77.7-3.2 14.9-3.2 42.9-.1 57.6 3.2 14.7 6.5 24.4 13.2 37.9 20.6 41.8 58.2 70.6 105 80.6 14.9 3.2 42.9 3.2 57.6.1 14.7-3.2 24.4-6.5 37.9-13.2 41.8-20.6 70.6-58.2 80.6-105 1.9-8.7 2.3-13.6 2.3-29 0-20.4-1.6-30.6-7.4-47.7-1.6-4.8-2.7-8.9-2.5-9.1.8-.8 35.4 17.6 52.7 28 10.1 6 19.5 11.7 21 12.7l2.8 1.6V604h50l.2-204.5.3-204.5 12 10.1c62.1 52.1 113.9 114.1 153 182.9 30 52.9 52.6 108.7 67 166.1 4.6 18.2 8.4 35.9 7.8 35.9-.3 0-3.5-2-7.2-4.4-14.1-9.4-30.2-16-46.9-19.3-12.9-2.6-36.4-2.3-50.2.6-33.1 7-58.8 20.8-80.3 43-13 13.6-21.7 25.9-31.1 44.1-9.3 18.2-14.4 31.2-25.2 64.3-17.7 54.1-21.8 64.3-35.5 88.3-15.6 27.1-26.2 41.7-41 55.9-18.5 17.8-36.9 26.9-65.4 32.5-13.9 2.7-34.2 3.6-45.7 2.1-67.7-9.1-115.9-67.2-123.9-149.6-1.6-16-.6-40 2.1-53 12.2-57.8 54.4-103.5 109-117.9 24.2-6.4 46.5-5.9 69.4 1.4 5.4 1.7 10 2.9 10.2 2.7.7-.7 19.4-43.9 19.4-44.7 0-1.1-23.2-8.6-32-10.4-58.4-11.8-118.7 6.8-164.8 50.8-43.6 41.8-66.3 98.5-63.8 160.1 2.6 66 25.9 121.9 67.4 161.6 24 23 52.5 38.5 83.2 45.3 27.5 6 50.9 6.1 80.8 0 62.9-12.6 102.3-45.8 143.3-120.6 10.6-19.3 16-32.9 29.9-74.8 7-21.2 14.5-42.8 16.5-48 18-45.7 38.8-68.7 72.1-80.1 35.2-11.9 65.7-5.2 89.5 19.8 14.9 15.7 24.4 34.7 29.6 59.3 2.2 10.9 2.5 40.1.4 50.5-9.7 48.6-46.3 79.8-97.6 83.3l-10 .7-.3 24.9-.2 24.9 11.7-.6c27.6-1.4 57.9-10.8 79.1-24.6 5-3.3 6.2-3.7 6.2-2.3 0 3.2-9.8 41.7-14.9 58.2-43.5 142.8-134.2 267.6-257.1 353.7-11.3 7.9-36.6 24.3-37.5 24.3-.3 0-.5-45-.5-100v-100H837v50h177v177.6l-4.7 2.4c-57.5 28.3-128.7 50-196 59.4-10 1.4-18.9 2.6-19.8 2.6-1.3 0-1.5-15.1-1.5-146v-146H575v50h168v101H575v50h168l-.2 47.2-.3 47.3-31.5-.1c-33.9-.1-55.4-1.6-86.5-6-184.4-25.9-351.7-129.8-457.7-284.4-9.1-13.3-21.8-33.3-21.8-34.4 0-.3 92.7-.6 206-.6h206V736h-50v276H308V736h-50v276H117.4l-1.9-3.8c-28.4-58.1-49.6-128.1-58.9-194.7-4.9-35.2-6-52.1-6-94.5s1.1-59.3 6-94.5c28.6-203.6 152.2-385.2 331.4-487C441.6 107 496.7 84.9 556.1 70c16.7-4.2 49.4-11 52.9-11 2 0 2 .6 1.8 175.2l-.3 175.3-2.8 10.4c-9.8 35.7-29.4 61.6-60.2 79.4-18.5 10.7-38.4 15.9-61 15.9-26.4.1-48.8-6.7-71-21.4-10-6.6-25.3-21.8-32.3-32.1-12-17.5-20.4-41-21.8-61.2l-.7-9.5H311v4c0 13.8 4.2 36.6 9.7 52.4 9.2 26.8 23.9 49.4 45.2 69.8 23.7 22.7 52.2 37.6 86.1 45 9.3 2 13.3 2.2 34 2.2s24.7-.2 34-2.2c63.3-13.8 113.1-58.1 132.3-117.8 2-6.1 4.7-16.3 5.9-22.5l2.3-11.4.3-179.3L661 52l4.8-.1c2.6-.1 9.4-.5 15.2-.9 16.9-1.1 57-1.1 77 .1zm135.1 24.7c18.7 5 33.3 13.4 46.9 27.2 20.3 20.5 30 45.6 28.7 74.5-1.2 26.3-10.8 47.8-29.7 66.5-20.5 20.3-45.6 30-74.5 28.7-26.3-1.2-47.8-10.8-66.5-29.7-20.3-20.5-30-45.6-28.7-74.5 1.2-26.3 10.8-47.8 29.7-66.5 14.6-14.4 32.1-23.8 51.7-27.5 10.8-2 32.2-1.4 42.4 1.3z"
				fill="#9b1212"
				className="color000 svgShape"
			/>
		</svg>
	</svg>
);
const NavBarContext = React.createContext({ setOpen: () => {} });

const NavLink = ({ name, route, isMobile }) => {
	const { setOpen } = React.useContext(NavBarContext);
	const router = useRouter();
	const active = router.asPath === `/${route}`;
	return (
		<Link href={route}>
			<LinkWrapper>
				<LinkTitle
					onClick={() => setOpen(false)}
					active={active}
					isMobile={isMobile}
				>
					{name}
				</LinkTitle>
				{active && !isMobile && <ActiveLinkIndicator />}
			</LinkWrapper>
		</Link>
	);
};

const MobileLink = (props) => <NavLink {...props} isMobile />;

const NavLogo = () => {
	return (
		<Link href={HOME_ROUTE}>
			{/* <Logo src="images/empty-logo.png" /> */}
			<NavIcon />
		</Link>
	);
};

export const DesktopLinks = () => (
	<>
		<Links>
			<div>
				<NavLink name="work" route={WORK_ROUTE} />
			</div>
			<NavLink name="etc" route={ETC_ROUTE} />
			<NavLink name="about" route={ABOUT_ROUTE} />
			<NavLink name="contact" route={CONTACT_ROUTE} />
		</Links>
	</>
);

export default function Navigation() {
	const isMobile = useIsMobile();
	const [isOpen, setOpen] = React.useState(false);
	const { scrollY } = useViewportScroll();
	const [hidden, setHidden] = React.useState(false);

	const update = () => {
		if (scrollY?.current < scrollY?.prev) {
			setHidden(false);
		} else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
			setHidden(true);
		}
	};

	const variants = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: -25 }
	};

	React.useEffect(() => {
		return scrollY.onChange(() => update());
	});

	React.useEffect(() => {
		if (!isMobile) setOpen(false);
	}, [isMobile]);

	return (
		<NavBarContext.Provider value={{ setOpen }}>
			<NavBar
				variants={variants}
				animate={hidden ? "hidden" : "visible"}
				transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
			>
				<NavLogo />
				{isMobile ? (
					<MenuButtonWrapper>
						<MenuButton
							toggled={isOpen}
							onToggle={() => setOpen((prev) => !prev)}
						/>
					</MenuButtonWrapper>
				) : (
					<>
						<DesktopLinks />
						<Links>
							<a target="#" href="https://twitter.com/joisleeux">
								@joisleeux
							</a>
						</Links>
					</>
				)}
				{isOpen && (
					<MobileMenu
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<MobileLinks>
							<MobileLink name="work" route={WORK_ROUTE} />
							<MobileLink name="etc" route={ETC_ROUTE} />
							<MobileLink name="about" route={ABOUT_ROUTE} />
							<MobileLink name="contact" route={CONTACT_ROUTE} />
						</MobileLinks>
					</MobileMenu>
				)}
			</NavBar>
		</NavBarContext.Provider>
	);
}
