import React, { useState } from "react";
import Dailog from "../Dailog/Dailog";
import "./MovieForm.css";

const MovieForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    releasedate: "",
    movieurl: "",
    rating: "",
    genre: "",
    overview: "",
    runntime: "",
  });

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function addMovie(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div className="BUTTON_WRAPPER_STYLES">
        {props.name === "addForm" && (
          <button className="closebutton" onClick={() => setIsOpen(true)}>
            <strong>ADD MOVIE</strong>
          </button>
        )}

        {props.name === "editForm" && (
          <h6
            class="dropdown-item"
            style={{ color: "white", paddingLeft: "0px" }}
            onClick={() => setIsOpen(true)}
          >
            Edit
          </h6>
        )}

        {props.name === "deleteForm" && (
          <h6
            class="dropdown-item"
            style={{ color: "white", paddingLeft: "0px" }}
            onClick={() => setIsOpen(true)}
          >
            Delete
          </h6>
        )}

        {(props.name === "addForm" || props.name === "editForm") && (
          <Dailog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            title={props.name === "addForm" ? "ADD MOVIE" : "EDIT MOVIE"}
          >
            <div className="row">
              <div className="col">
                <form
                  onSubmit={(event) => {
                    addMovie(event);
                  }}
                >
                  <div className="row mb-3">
                    <div className="col-8">
                      <label for="email" className="form-label formlabel">
                        TITLE
                      </label>
                      <input
                        type="text"
                        className="form-control inputfield"
                        id="title"
                        name="title"
                        placeholder="Monna"
                        onChange={(event) => {
                          handleInput(event);
                        }}
                      />
                    </div>
                    <div className="col-4">
                      <label for="releasedate" className="form-label formlabel">
                        RELEASE DATE
                      </label>
                      <input
                        type="date"
                        className="form-control inputfield"
                        id="releasedate"
                        name="releasedate"
                        placeholder="Select Date"
                        onChange={(event) => {
                          handleInput(event);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-8">
                      <label for="movieurl" className="form-label formlabel">
                        MOVIE URL
                      </label>
                      <input
                        type="text"
                        className="form-control inputfield"
                        id="movieurl"
                        name="movieurl"
                        placeholder="https://"
                        onChange={(event) => {
                          handleInput(event);
                        }}
                      />
                    </div>
                    <div className="col-4">
                      <label for="rating" className="form-label formlabel">
                        RATING
                      </label>
                      <input
                        type="text"
                        className="form-control inputfield"
                        id="rating"
                        name="rating"
                        placeholder="7.8"
                        onChange={(event) => {
                          handleInput(event);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-8">
                      <label for="genre" className="form-label formlabel">
                        GENRE
                      </label>
                      <input
                        type="text"
                        className="form-control inputfield"
                        id="genre"
                        name="genre"
                        onChange={(event) => {
                          handleInput(event);
                        }}
                      />
                    </div>
                    <div className="col-4">
                      <label for="runtime" className="form-label formlabel">
                        RUNTIME
                      </label>
                      <input
                        type="text"
                        className="form-control inputfield"
                        id="runtime"
                        name="runtime"
                        onChange={(event) => {
                          handleInput(event);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="overview" className="form-label formlabel">
                      OVERVIEW
                    </label>
                    <textarea
                      className="formoverview inputfield"
                      id="overview"
                      name="overview"
                      placeholder="Movie description"
                      onChange={(event) => {
                        handleInput(event);
                      }}
                    />
                  </div>
                  <button type="submit" className="btn submitbutton">
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-danger mx-3 resetbutton"
                  >
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </Dailog>
        )}
        {props.name === "deleteForm" && (
          <Dailog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            title="DELETE MOVIE"
          >
            <h5 style={{ color: "white" }}>
              Are you sure you want to delete this movie ?
            </h5>
            <button type="submit" className="btn submitbutton">
              Confirm
            </button>
          </Dailog>
        )}
      </div>
    </>
  );
};

export default MovieForm;
