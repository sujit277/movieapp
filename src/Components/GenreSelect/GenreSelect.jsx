import React, { useEffect, useState } from "react";
import "./GenreSelect.css";
import Img2 from "../../images/DropdownOptions.png";
import SortControl from "../SortControl/SortControl";
import MovieForm from "../MovieForm/MovieForm";

const GenreSelect = (props) => {
  const [filter, setFilter] = useState("Release Date");
  const [updatedMovieData, setUpdatedMovieData] = useState();
  const data = ["ALL", "DOCUMENTARY", "COMDEY", "HORROR", "CRIME"];

  useEffect(() => {
    filterMovies(filter);
  });

  function navOptions(data) {
    return (
      <h6 className="nav-link" style={{ color: "white" }}>
        {data}
      </h6>
    );
  }

  function compare(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

  function filterMovies(filterType) {
    if (filterType == "Title") {
      setUpdatedMovieData(props.movieData.sort(compare));
    }
    if (filterType == "Release Date") {
      setUpdatedMovieData(
        props.movieData.sort(
          (a, b) =>
            Number(a.release_date.split("-")[0]) -
            Number(b.release_date.split("-")[0])
        )
      );
    }
  }

  function getMovieGernes(data) {
    if (data.length === 1) {
      const str = data[0];
      return <h6 className="movietype">{`${str}`}</h6>;
    } else if (data.length > 1) {
      const str = data[0] + " & " + data[1];
      return <h6 className="movietype">{`${str}`}</h6>;
    }
  }

  function onFilterChange(filterValue) {
    setFilter(filterValue);
    filterMovies(filterValue);
  }

  function movieTile(data) {
    return (
      <>
        <div
          className="col-3 movieitem"
          data-testid="  movieTile"
          onClick={() => {
            props.onSelect(data.title);
          }}
        >
          <div
            style={{
              backgroundImage: `url(${data?.poster_path})`,
              height: "350px",
              width: "300px",
              zIndex: "-1",
            }}
          >
            {props.selectedGenre === data.title && (
              <div class="dropdown" data-testid="selectedmovie">
                <h6
                  class="btn btn-secondary dropdown-toggle dropdown-btn"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={Img2}
                    style={{ height: "30px", width: "20px" }}
                  ></img>
                </h6>

                <ul
                  class="dropdown-menu"
                  style={{ width: "20px", backgroundColor: "#232323" }}
                >
                  <li>
                    <button
                      type="button"
                      class="btn-close close"
                      aria-label="Close"
                    ></button>
                  </li>
                  <li>
                    <h6 class="dropdown-item" style={{ color: "white" }}>
                      <MovieForm name={'editForm'} />
                    </h6>
                  </li>
                  <li>
                    <h6 class="dropdown-item" style={{ color: "white" }}>
                      <MovieForm name={'deleteForm'} />
                    </h6>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div style={{ marginTop: "20px" }}>
            <h5 style={{ color: "white", float: "left" }}>{data?.title}</h5>
            <span className="releasedate">
              {(data?.release_date).split("-")[0]}
            </span>
          </div>
          {getMovieGernes(data?.genres)}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="genreselect">
        <div style={{ display: "flex" }}>
          <nav className="nav" style={{ margin: "5px 30px 0 30px" }}>
            {data.map((item) => {
              return navOptions(item);
            })}
          </nav>
          <SortControl onFilterChange={onFilterChange} filter={filter} />
        </div>
        <hr style={{ color: "white" }}></hr>
        <h4 style={{ margin: "20px 30px 0 50px", color: "white" }}>
          {props.movieData.length} Movies Found
        </h4>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <div className="container">
            <div className="row" style={{ margin: "0px 40px" }}>
              {updatedMovieData?.map((item) => {
                return movieTile(item);
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">netflix roulette</div>
    </>
  );
};

export default GenreSelect;
