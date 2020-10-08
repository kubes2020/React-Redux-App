import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchSongs } from "./actions/songActions";

function App(props) {
  const { fetchSongs } = props;
  const [url, setUrl] = useState(
    "http://www.songsterr.com/a/ra/songs.json?pattern=Marley"
  );

  useEffect(() => {
    fetchSongs(url);
  }, [fetchSongs, url]);

  return (
    <>
      <h1>Just a Test!</h1>
      {props.songs.map((song) => (
        <h2 key={song.id}>{song.title}</h2>
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};
export default connect(mapStateToProps, { fetchSongs })(App);
