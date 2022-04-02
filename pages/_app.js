import Head from "next/head";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Navigation from "../components/Navigation";
import useIsMobile from "../hooks/useIsMobile";
import { motion, AnimatePresence } from "framer-motion";
// import "../normalize.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #0d6397;
	--radius: 0.75rem;
	--radius-l: 1.25rem;
  }
  html {
	scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Comfortaa", sans-serif;
	font-size: 16px;
	line-height: 1.5;
  }
  a {
	color: black;
	text-decoration: none;
  }
  button {
	/* font-family: 'Poppins', sans-serif; */
	font-size: 1rem;
	/* :hover {
		transform: scale(0.975);
	} */

	/* :active {
		transform: scale(0.95);
	}
	transition: transform 100ms; */
  }
  p, h1, h2, h3, h4, h5, h6 {
	  margin: 0;
   }
  /* h5 {
	  font-size: 1.625rem;
  }
  p {
	  font-size: 1.5rem;
  } */
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
	font-size: ${({ isMobile }) => (isMobile ? "1rem" : "2rem")};
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
					url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&family=Poppins&display=swap');
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
