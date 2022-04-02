import styled from "styled-components";
export const PageContent = styled.div`
	padding: 5rem 0;
	width: 100%;
`;
export const TitleSection = styled.div`
	padding-left: ${({ isMobile }) => (isMobile ? "5vw" : "20vw")};
`;
export const Title = styled.h5`
	font-size: ${({ isMobile }) => (isMobile ? "x-large" : "unset")};
	padding-left: 5vw;
`;
export const List = styled.div`
	padding: ${({ isMobile }) => (isMobile ? "5rem 2.5rem" : "5rem")};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10rem;
`;
export const Item = styled.div`
	max-width: ${({ isMobile }) => (isMobile ? "100%" : "50rem")};
	flex: 1;
	display: grid;
	grid-template-columns: ${({ isMobile }) => (isMobile ? "1fr" : "1fr 1fr")};
	gap: ${({ isMobile }) => (isMobile ? "5rem" : "2rem")};
`;
export const ItemImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ItemText = styled.div`
	font-size: medium;
	display: flex;
	align-items: center;
`;
