import React, { useEffect, useState } from "react";
import "../StyleSheets/Banner.css";
import axios from "../axios";
import { sci_fiUrl, imageUrl } from "../Constants/Constants";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(sci_fiUrl).then((res) => {
      setMovie(res.data.results[13]);
    }).catch(error=> {
      alert('Something went wrong.')
    });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <h1 className="discription">{movie ? movie.overview : ""}</h1>
        <div className="banner-buttons">
          <button className="button">
            <i className="fa-solid fa-play" />
            &nbsp;&nbsp;&nbsp;Play
          </button>
          <button className="button">
            <i className="fa-solid fa-list-ul" />
            &nbsp;&nbsp;&nbsp;My list
          </button>
        </div>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
