import React, { useState } from "react";
import Dailog from "../Dailog/Dailog";
import "./MovieForm.css";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const MovieForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button className="closebutton" onClick={() => setIsOpen(true)}>
          <strong>ADD MOVIE</strong>
        </button>

        <Dailog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="ADD MOVIE"
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
                <button
                  type="submit"
                  className="btn"
                  style={{
                    float: "right",
                    backgroundColor: "#F65261",
                    color: "white",
                  }}
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="btn btn-danger mx-3"
                  style={{
                    float: "right",
                    backgroundColor: "#232323",
                    color: "#F65261",
                  }}
                >
                  Reset
                </button>
              </form>
            </div>
          </div>
        </Dailog>
      </div>
    </>
  );
};

export default MovieForm;
