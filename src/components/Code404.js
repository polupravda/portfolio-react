import React from "react";
import "../App.scss";
import { notFound } from "../Content.js";

function Code404() {
  return (
    <div id="code-404" alt={notFound.errorCode}>
      <svg viewBox="0 0 304 96" version="1.1">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Artboard-Copy"
            transform="translate(0.000000, -1144.000000)"
            fill="#313131"
          >
            <g id="Group-2" transform="translate(0.000000, 1144.000000)">
              <path
                d="M0,69.4925373 L0,0 L43.3432836,0 L43.3432836,26.1492537 L51.9402985,26.1492537 L51.9402985,0 L96,0 L96,96 L26.5074627,96 L26.5074627,69.4925373 L-1.00186526e-12,69.4925373 Z"
                id="Combined-Shape-Copy"
              ></path>
              <path
                d="M208,69.4925373 L208,0 L251.343284,0 L251.343284,26.1492537 L259.940299,26.1492537 L259.940299,0 L304,0 L304,96 L234.507463,96 L234.507463,69.4925373 L208,69.4925373 Z"
                id="Combined-Shape-Copy-3"
              ></path>
              <path
                d="M104,0 L200,0 L200,96 L104,96 L104,0 Z M147.701493,43.7014925 L147.701493,52.2985075 L156.298507,52.2985075 L156.298507,43.7014925 L147.701493,43.7014925 Z"
                id="Combined-Shape-Copy-2"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Code404;
