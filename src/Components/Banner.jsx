import React from "react";
import "../StyleSheets/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">1899</h1>
        <h1 className="discription">
          From creators Jantje Friese and Baran bo Odar of Dark comes 1899, a
          new mystery-thriller series that’s about to set sail. At the end of
          the 19th century, passengers journey from London to New York, looking
          forward to a new life that awaits them in the New World
        </h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
