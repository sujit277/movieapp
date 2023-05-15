import React, { useState } from "react";
import Dailog from "../Dailog/Dailog";
import "./MovieForm.css";

const MovieForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);

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
                <form>
                  <div className="row mb-3">
                    <div className="col-8">
                      <label for="email" className="form-label formlabel">
                        TITLE
                      </label>
                      <input
                        type="email"
                        className="form-control inputfield"
                        id="email"
                        placeholder="Monna"
                      />
                    </div>
                    <div className="col-4">
                      <label for="date" className="form-label formlabel">
                        RELEASE DATE
                      </label>
                      <input
                        type="date"
                        className="form-control inputfield"
                        id="date"
                        placeholder="Select Date"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-8">
                      <label for="url" className="form-label formlabel">
                        MOVIE URL
                      </label>
                      <input
                        type="text"
                        className="form-control inputfield"
                        id="url"
                        placeholder="https://"
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
                        placeholder="7.8"
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
                      placeholder="Movie description"
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
