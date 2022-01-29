import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuButton } from "./MenuButton";
import useIsMobile from "../hooks/useIsMobile";
import { motion, AnimatePresence } from "framer-motion";

const rotate = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
`;

const LOGO_SIZE = 10;

const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;
	width: auto;
	padding: 4vh 4vw;
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
const LinkTitle = styled.span`
	cursor: pointer;
	padding-bottom: ${({ isMobile }) => (isMobile ? 0 : "1vh")};
	margin-bottom: ${({ isMobile }) => (isMobile ? "20%" : "0")};
	border-bottom: ${({ active }) =>
		active ? "3px solid #000" : "3px solid transparent"};
	transition: border-bottom 600ms;
	font-size: ${({ isMobile }) => (isMobile ? "2rem" : "unset")};
`;
const MobileMenu = styled(motion.div)`
	position: absolute;
	top: 28vh;
	left: 0;
	width: 100vw;
	height: 66.66vh;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const HOME_ROUTE = "/";
const ABOUT_ROUTE = "/about";
const PROJECTS_ROUTE = "/projects";

const NavBarContext = React.createContext({ setOpen: () => {} });

const NavLink = ({ name, route, isMobile }) => {
	const router = useRouter();
	const { setOpen } = React.useContext(NavBarContext);
	return (
		<Link href={route}>
			<LinkTitle
				onClick={() => setOpen(false)}
				active={router.pathname === route}
				isMobile={isMobile}
			>
				{name}
			</LinkTitle>
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

	React.useEffect(() => {
		if (!isMobile) setOpen(false);
	}, [isMobile]);
	return (
		<NavBarContext.Provider value={{ setOpen }}>
			<NavBar>
				<NavLogo />

				{isMobile ? (
					<MenuButton
						isOpen={isOpen}
						onClick={() => setOpen(!isOpen)}
						transition={{ type: "spring", stiffness: 260, damping: 20 }}
					/>
				) : (
					<Links>
						<NavLink name="Home" route={HOME_ROUTE} />
						<NavLink name="About" route={ABOUT_ROUTE} />
						<NavLink name="Projects" route={PROJECTS_ROUTE} />
					</Links>
				)}
				<AnimatePresence>
					{isOpen && (
						<MobileMenu
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<MobileLink name="Home" route={HOME_ROUTE} />
							<MobileLink name="About" route={ABOUT_ROUTE} />
							<MobileLink name="Projects" route={PROJECTS_ROUTE} />
						</MobileMenu>
					)}
				</AnimatePresence>
			</NavBar>
		</NavBarContext.Provider>
	);
}
