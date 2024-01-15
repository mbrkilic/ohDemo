import React from "react";

function Footer() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="m-4"> © Oli Harris 2023</h1>
      <div className="flex items-center justify-center">
        <span className="m-4">
          <a href="https://www.twitter.com">twitter</a>
        </span>
        <span className="m-4">
          <a href="https://www.linkedin.com">linkedin</a>
        </span>
        <span className="m-4">
          <a href="/">mail</a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
