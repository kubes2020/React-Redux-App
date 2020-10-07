import React, { useState, useEffect } from "react";
import connect from "react-redux/lib/connect/connect";
import "./App.css";
import { fetchSongs } from "./actions/songActions";

function App(props) {
  const { fetchSongs } = props;
  const { url, setUrl } = useState(
    "http://www.songsterr.com/a/ra/songs.xml?pattern=Marley"
  );

  useEffect(() => {
    fetchSongs(url);
  }, [fetchSongs, url]);

  return (
    <>
      <h1>Just a Test!</h1>
      <button>Submit</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, { fetchSongs })(App);
