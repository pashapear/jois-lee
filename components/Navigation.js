import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Twirl as MenuButton } from "hamburger-react";
import useIsMobile from "../hooks/useIsMobile";
import { motion, AnimatePresence } from "framer-motion";

const rotate = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(-360deg);
  }
`;

const LOGO_SIZE = 10;

const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: auto;
	padding: 4vh 4vw;
`;
const MobileNavBar = styled(NavBar)`
	justify-content: flex-end;
`;
const Logo = styled.img`
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

// const ProjectMenuForceField = styled.div`
// 	position: absolute;
// `;

// const ProjectMenu = styled.div`
// 	background-color: white;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;
// 	gap: 1rem;
// 	padding: 1rem;
// 	border: 1px solid rgba(0, 0, 0, 0.05);
// 	border-radius: var(--radius);
// 	-webkit-box-shadow: 10px 10px 11px -2px rgba(0, 0, 0, 0.39);
// 	box-shadow: 10px 10px 11px -2px rgba(0, 0, 0, 0.39);
// `;

// const ProjectMenuItem = styled.div`
// 	display: flex;
// 	font-size: 1rem;
// 	gap: 0.5rem;
// `;

// const ProjectMenuLink = styled(Link)`
// 	display: flex;
// 	justify-content: space-between;
// `;

// const projectLinks = [
// 	{ label: "LinkedIn Features", value: 0 },
// 	{ label: "Planta App Redesign", value: 1 },
// 	{ label: "Pasha Pear", value: 2 },
// 	{ label: "M____", value: 3 },
// 	{ label: "Etc.", value: 4 },
// 	{ label: "Photography", value: 5 }
// ];

export const HOME_ROUTE = "#home";
export const WORK_ROUTE = "#work";
export const ABOUT_ROUTE = "#about";
export const ETC_ROUTE = "#etc";
export const CONTACT_ROUTE = "#contact";

const NavBarContext = React.createContext({ setOpen: () => {} });

const NavLink = ({ name, route, isMobile }) => {
	const router = useRouter();
	const { setOpen } = React.useContext(NavBarContext);
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
				{active && <ActiveLinkIndicator />}
			</LinkWrapper>
		</Link>
	);
};

const MobileLink = (props) => <NavLink {...props} isMobile />;

const NavLogo = () => {
	return (
		<Link href={HOME_ROUTE}>
			<Logo src="images/empty-logo.png" />
		</Link>
	);
};

export default function Navigation() {
	const isMobile = useIsMobile();
	const [isOpen, setOpen] = React.useState(false);
	// const [showProjectMenu, setShowProjectMenu] = React.useState(false);
	// const [menuPosition, setMenuPosition] = React.useState(null);
	const [overMenu, setOverMenu] = React.useState(false);
	const rootRef = React.useRef(null);
	// const menuRef = React.useRef(null);

	// React.useEffect(() => {
	// 	setInterval(() => setOpen((prev) => !prev), 2000);
	// }, []);

	// React.useEffect(() => {
	// 	if (rootRef.current) {
	// 		rootRef.current.onmouseenter = () => setShowProjectMenu(true);
	// 		rootRef.current.onmouseleave = () =>
	// 			setTimeout(
	// 				(viewingMenu) => !viewingMenu && setShowProjectMenu(false),
	// 				1000,
	// 				overMenu
	// 			);
	// 		const { left, bottom, right } = rootRef.current.getBoundingClientRect();
	// 		setMenuPosition({
	// 			left,
	// 			bottom,
	// 			right
	// 		});
	// 	}
	// }, [rootRef.current]);

	// React.useEffect(() => {
	// 	if (menuRef.current) {
	// 		menuRef.current.onmouseenter = () => setOverMenu(true);
	// 		menuRef.current.onmouseleave = () => {
	// 			setShowProjectMenu(false);
	// 		};
	// 	}
	// }, [menuRef.current, showProjectMenu]);

	React.useEffect(() => {
		if (!isMobile) setOpen(false);
	}, [isMobile]);

	return (
		<AnimatePresence>
			<NavBarContext.Provider value={{ setOpen }}>
				<NavBar id="home">
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
							<Links>
								<div ref={rootRef}>
									<NavLink name="work" route={WORK_ROUTE} />
								</div>
								<NavLink name="about" route={ABOUT_ROUTE} />
								<NavLink name="ect" route={ETC_ROUTE} />
								<NavLink name="contact" route={CONTACT_ROUTE} />
							</Links>
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
								<MobileLink name="about" route={ABOUT_ROUTE} />
								<MobileLink name="ect" route={ETC_ROUTE} />
								<MobileLink name="contact" route={CONTACT_ROUTE} />
							</MobileLinks>
						</MobileMenu>
					)}
					{/* {showProjectMenu && (
						// <ProjectMenuForceField>
						<ProjectMenu
							ref={menuRef}
							style={{
								position: "absolute",
								left: menuPosition?.left || 0,
								top: (menuPosition?.bottom || 0) + 8
							}}
						>
							{projectLinks.map((item) => (
								<ProjectMenuItem>
									<ProjectMenuLink
										key={item.value}
										href={`#project-${item.value}`}
									>
										{item.label}
									</ProjectMenuLink>
								</ProjectMenuItem>
							))}
						</ProjectMenu>
						// </ProjectMenuForceField>
					)} */}
				</NavBar>
			</NavBarContext.Provider>
		</AnimatePresence>
	);
}
