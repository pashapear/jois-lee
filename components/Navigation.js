import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Twirl as MenuButton } from "hamburger-react";
import useIsMobile from "../hooks/useIsMobile";
import { motion, useViewportScroll } from "framer-motion";
import {
	HOME_ROUTE,
	WORK_ROUTE,
	ETC_ROUTE,
	ABOUT_ROUTE,
	CONTACT_ROUTE
} from "../constants/routes";
import { NavIcon } from "./Logo";

const NavBar = styled(motion.nav)`
	z-index: 2;
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: auto;
	padding: 2vh 4vw;
	background: white;
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
							<a
								title="Download resume"
								download
								href="/files/jois-lee-resume.pdf"
							>
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
