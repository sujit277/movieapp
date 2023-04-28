import React from "react";
import "./GenreSelect.css";
import Img2 from "../../images/DropdownOptions.png";

const GenreSelect = (props) => {
  const data = ["ALL", "DOCUMENTARY", "COMDEY", "HORROR", "CRIME"];

  function navOptions(data) {
    return (
      <h6 className="nav-link" style={{ color: "white" }}>
        {data}
      </h6>
    );
  }

  function movieType(data) {
    if (data.length === 1) {
      const str = data[0];
      return <h6 className="movietype">{`${str}`}</h6>;
    } else if (data.length > 1) {
      const str = data[0] + " & " + data[1];
      return <h6 className="movietype">{`${str}`}</h6>;
    }
  }

  function movieItem(data) {
    return (
      <>
        <div
          className="col-3 movieitem"
          data-testid="movieItem"
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
                  href="#"
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
                    <h6
                      class="dropdown-item"
                      href="#"
                      style={{ color: "white" }}
                    >
                      Edit
                    </h6>
                  </li>
                  <li>
                    <h6
                      class="dropdown-item"
                      href="#"
                      style={{ color: "white" }}
                    >
                      Delete
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
          {movieType(data?.genres)}
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
          <h5 className="mx-6 sortby">Sort By</h5>
          <div
            class="dropdown"
            style={{ marginLeft: "20px", marginTop: "10px" }}
          >
            <button
              class="btn btn-sm btn-secondary dropdown-toggle"
              type="button"
              style={{ backgroundColor: "#232323" }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              RELEASE DATE
            </button>
            <ul class="dropdown-menu">
              <li>
                <h6 class="dropdown-item" href="#">
                  Action
                </h6>
              </li>
              <li>
                <h6 class="dropdown-item" href="#">
                  Another action
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <h4 style={{ margin: "20px 30px 0 50px", color: "white" }}>
          {props.movieData.length} Movies Found
        </h4>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <div className="container">
            <div className="row" style={{ margin: "0px 40px" }}>
              {props.movieData.map((item) => {
                return movieItem(item);
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
