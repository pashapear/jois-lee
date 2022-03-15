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
    transform: rotateZ(-360deg);
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

const LinkWrapper = styled.div`
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
const MobileNavBar = styled(NavBar)`
	display: flex;
	justify-content: flex-end;
	width: 92vw;
`;
const MobileLinks = styled.div`
	padding-top: 25vh;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;
`;

const HOME_ROUTE = "#home";
const ABOUT_ROUTE = "#about";
const ETC_ROUTE = "#etc";
const CONTACT_ROUTE = "#contact";

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
					<>
						<Links>
							<NavLink name="work" route={HOME_ROUTE} />
							<NavLink name="about" route={ABOUT_ROUTE} />
							<NavLink name="ect" route={ETC_ROUTE} />
							<NavLink name="contact" route={CONTACT_ROUTE} />
						</Links>
						<Links>
							<span>
								<a target="#" href="https://twitter.com/joisleeux">
									@
								</a>
								joisleeux
							</span>
						</Links>
					</>
				)}
				<AnimatePresence>
					{isOpen && (
						<MobileMenu
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<MobileNavBar>
								<MenuButton
									isOpen={isOpen}
									onClick={() => setOpen(!isOpen)}
									transition={{ type: "spring", stiffness: 260, damping: 20 }}
								/>
							</MobileNavBar>
							<MobileLinks>
								<MobileLink name="work" route={HOME_ROUTE} />
								<MobileLink name="about" route={ABOUT_ROUTE} />
								<MobileLink name="ect" route={ETC_ROUTE} />
								<MobileLink name="contact" route={CONTACT_ROUTE} />
							</MobileLinks>
						</MobileMenu>
					)}
				</AnimatePresence>
			</NavBar>
		</NavBarContext.Provider>
	);
}
