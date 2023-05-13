import React from "react";
import "./MovieDetails.css";

const MovieDetails = (props) => {
  function getMovieGenres(data) {
    if (data.length === 1) {
      const str = data[0];
      return <h6 className="movieGenre">{`${str}`}</h6>;
    } else if (data.length > 1) {
      const str = data[0] + " & " + data[1];
      return <h6 className="movieGenre">{`${str}`}</h6>;
    }
  }

  function getMovieDuration(duration) {
    const hours = duration / 60;
    const mins = duration % 60;
    const durationtime = `${Math.floor(hours)} h ${mins} min`;
    return <span className="durationTime">{durationtime}</span>;
  }

  return (
    <>
      <div className="row movieDetails">
        <div className="col-5">
          <img src={props?.moviedetails[0].poster_path} height="500px"></img>
        </div>
        <div className="col-7">
          <h2 className="movieTitle">
            {(props?.moviedetails[0].title).toUpperCase()}
          </h2>
          {getMovieGenres(props?.moviedetails[0].genres)}
          <span className="movieReleaseDate">
            {(props?.moviedetails[0].release_date).split("-")[0]}
          </span>
          {getMovieDuration(props?.moviedetails[0].runtime)}
          <h6 className="movieOverview">{props?.moviedetails[0].overview}</h6>
        </div>
      </div>
      <div style={{ backgroundColor: "grey", height: "5px" }}></div>
    </>
  );
};

export default MovieDetails;
