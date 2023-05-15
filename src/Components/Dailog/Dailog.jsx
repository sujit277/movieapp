import React from "react";
import ReactDom from "react-dom";
import "./Dailog.css";

export default function Dailog({ title, open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {(title === "ADD MOVIE" || title === "EDIT MOVIE") && (
        <>
          <div className="OVERLAY_STYLES" />
          <div className="MODAL_STYLES">
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              style={{ float: "right", backgroundColor: "white" }}
              onClick={onClose}
            ></button>
            <h1 className="mb-3" style={{ color: "white" }}>
              {title}
            </h1>
            {children}
          </div>
        </>
      )}
      {title === "DELETE MOVIE" && (
        <>
          <div className="OVERLAY_STYLES" />
          <div className="CONFIMATION_DIALOG">
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              style={{ float: "right", backgroundColor: "white", top: "0px" }}
              onClick={onClose}
            ></button>
            <h1 className="mb-3" style={{ color: "white" }}>
              {title}
            </h1>
            {children}
          </div>
        </>
      )}
    </>,
    document.getElementById("portal")
  );
}
