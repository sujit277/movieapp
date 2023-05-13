import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#232323",
  padding: "50px",
  width: "80%",
  height: "80%",
  zIndex: 1000,
  overflow: "auto",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Dailog({ title, open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h1 className="mb-3" style={{ color: "white" }}>
          {title}
        </h1>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          style={{ float: "right", backgroundColor:"white" }}
          onClick={onClose}
        ></button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
