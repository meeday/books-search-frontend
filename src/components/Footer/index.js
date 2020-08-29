import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      <hr />
      <div className="row">
        <div className="pull-left">
          <p className="pull-left text-white">© 2020 Meedaxa Ahmed</p>
        </div>
        <div className="pull-right">
          <p>
            <i className="text-white fab fa-github" />
            <span style={{ marginLeft: `${10}px` }}>
              <a
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/meeday"
              >
                Github
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
