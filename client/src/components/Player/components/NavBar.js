import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faHome, faRedo} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom'

const NavBar = ({ libraryStatus, setLibraryStatus }) => {
	const navigate = useNavigate();

	return (
		<NavContainer>
			<H1 libraryStatus={libraryStatus}>Emotion.ly</H1>
			<div>
				<ButtonNav onClick={() => navigate('/')}>
					Home {`\t`}
					<FontAwesomeIcon icon={faHome} />
				</ButtonNav>
				
				<ButtonNav onClick={() => setLibraryStatus(!libraryStatus)}>
					My Playlist {`\t`}
					<FontAwesomeIcon icon={faMusic} />
				</ButtonNav>
			</div>
			
		</NavContainer>
	);
};

const NavContainer = styled.div`
	min-height: 10vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media screen and (max-width: 768px) {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
	}
`;

const H1 = styled.h1`
	transition: all 0.5s ease;

	@media screen and (max-width: 768px) {
		visibility: ${(p) => (p.libraryStatus ? "hidden" : "visible")};
		opacity: ${(p) => (p.libraryStatus ? "0" : "100")};
		transition: all 0.5s ease;
	}
`;

const ButtonNav = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	border: 2px solid rgb(65, 65, 65);
	padding: 0.5rem;
	transition: all 0.3s ease;
	&:hover {
		background: rgb(65, 65, 65);
		color: white;
	}
	margin: 5px;
`;

export default NavBar;
