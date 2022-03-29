import styled from "styled-components";

export const BlackButton = styled.button`
	cursor: pointer;
	background-color: black;
	border-radius: var(--radius);
	border: 1px solid black;
	color: white;
	padding: 0.813rem 1.5rem;
	display: flex;
	align-items: center;
`;

export const ClearButton = styled(BlackButton)`
	background-color: transparent;
	border-radius: var(--radius);
	color: black;
`;
