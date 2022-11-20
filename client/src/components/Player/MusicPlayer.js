import React, { useState, useRef } from "react";
import styled from "styled-components";
import "./player.css";

// Import components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import NavBar from "./components/NavBar";


const MusicPlayer = ({playlist}) => {
	// Ref
	const audioRef = useRef(null);

	// State
	const [songs, setSongs] = useState(playlist);
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	// Functions
	const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		let nextSong = songs[(currentIndex + 1) % songs.length];
		await setCurrentSong(nextSong);

		const newSongs = songs.map((song) => {
			if (song.id === nextSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);

		if (isPlaying) {
			audioRef.current.play();
		}
	};

	return (
		<AppContainer className = "music-body" libraryStatus={libraryStatus}>
			<div className="music-body-div">
				<NavBar libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
				<Song currentSong={currentSong} />
				<Player
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					currentSong={currentSong}
					setCurrentSong={setCurrentSong}
					audioRef={audioRef}
					songInfo={songInfo}
					setSongInfo={setSongInfo}
					songs={songs}
					setSongs={setSongs}
				/>
			</div>
			
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
			<audio
				onLoadedMetadata={updateTimeHandler}
				onTimeUpdate={updateTimeHandler}
				onEnded={songEndHandler}
				ref={audioRef}
				src={currentSong.audio}
			/>
		</AppContainer>
	);
};

const AppContainer = styled.div`
	transition: all 0.5s ease;
	margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
	@media screen and (max-width: 768px) {
		margin-left: 0;
		margin-bottom: 0;
	}
`;

export default MusicPlayer;
