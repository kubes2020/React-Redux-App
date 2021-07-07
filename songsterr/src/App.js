import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchSongs } from "./actions/songActions";

function App(props) {
  const { fetchSongs } = props;
  const [searchTerm, setSearchTerm] = useState();
  const [url, setUrl] = useState(
    "http://www.songsterr.com/a/ra/songs.json?pattern=Marley"
  );

  useEffect(() => {
    fetchSongs(url);
  }, [fetchSongs, url]);

  const onChange = (e) => {
    e.persist();
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setUrl(`http://www.songsterr.com/a/ra/songs.json?pattern=${searchTerm}`);
  };

  return (
    <>
      <div className="App">
        <div className="App-header">
          <h1>
            Find Chords
            <br /> To Your Favorite Songs!
          </h1>
        </div>
        <form onSubmit={onSubmit}>
          <label htmlFor="searchTerm">
            Search:
            <input
              type="text"
              name="searchTerm"
              onChange={onChange}
              value={searchTerm}
            />
          </label>
          <button>Submit</button>
        </form>
        {props.songs.map((song) => (
          <h2 key={song.id}>{song.title}</h2>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};
export default connect(mapStateToProps, { fetchSongs })(App);
