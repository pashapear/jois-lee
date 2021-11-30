import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Navigation from "../components/Navigation";
import useIsMobile from "../hooks/useIsMobile";
import { motion, AnimatePresence } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #0d6397;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

const theme = {
	colors: {
		primary: "#0d6397"
	}
};

const PageContainer = styled.div`
	/* @import url("https://fonts.googleapis.com/css2?family=Handlee&display=swap"); */
	@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap");

	/* font-family: "Handlee", cursive; */
	font-family: "Raleway", sans-serif;
	font-size: 1.2rem;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
`;

const PageContent = styled(motion.div)`
	flex: 1 0 auto;
	padding: ${({ isMobile }) => (isMobile ? "0 4vw" : "0 8vw 0 20vw")};
`;

const list = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
};

export default function App({ Component, pageProps }) {
	const isMobile = useIsMobile();
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<PageContainer>
					<Navigation />
					<AnimatePresence>
						<PageContent
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							isMobile={isMobile}
						>
							<Component {...pageProps} />
						</PageContent>
					</AnimatePresence>
				</PageContainer>
			</ThemeProvider>
		</>
	);
}
