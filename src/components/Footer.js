import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <footer class="page-footer grey darken-4">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Content</h5>
              <p class="grey-text text-lighten-4">Lorem ipsum Lorem ipsum</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Evaluasi-8</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Github
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Twitter
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Instagram
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2014 Copyright-UL
            <a class="grey-text text-lighten-4 right" href="#!">
              More
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
