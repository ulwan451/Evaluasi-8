import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper grey lighten-5">
            <Link to="/">
              <a
                style={{ fontSize: "25px", color: "grey" }}
                href="#!"
                class="brand-logo center"
              >
                Medium
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
