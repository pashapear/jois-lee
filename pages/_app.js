import Head from "next/head";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Navigation from "../components/Navigation";
import useIsMobile from "../hooks/useIsMobile";
import { motion, AnimatePresence } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #0d6397;
  }
  html {
	scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Comfortaa", sans-serif;
  }
  a {
	color: black;
  }
`;

const theme = {
	colors: {
		primary: "#0d6397"
	}
};

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
`;

const PageContent = styled(motion.div)`
	flex: 1 0 auto;
	padding: ${({ isMobile }) => (isMobile ? "0 4vw" : "0 8vw 0 20vw")};
	font-size: ${({ isMobile }) => (isMobile ? "16px" : "32px")};
`;

const list = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
};

export default function App({ Component, pageProps }) {
	const isMobile = useIsMobile();
	return (
		<>
			<Head>
				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap');
				</style>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<PageContainer isMobile={isMobile}>
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
