import React, { useEffect, useState } from "react";
import "../StyleSheets/RowPost.css";
import axios from "../axios";
import { imageUrl, API_KEY } from "../Constants/Constants";
import YouTube from "react-youtube";

function RowPost(props) {
  const { Genre, url } = props.data;
  const [movieName, showName] = useState(null);
  const [movies, setMovie] = useState([]);
  const [trailer, setVideo] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((error) => {
        alert("Something went wrong.");
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{Genre}</h2>

      <div className="posters">
        {movies.map((movie) => {
          return (
            <div
              className="poster_container"
              key={movie.id}
              onMouseEnter={() => {
                showName(movie);
              }}
              onMouseLeave={() => {
                showName(null);
              }}
            >
              <img
                className="poster"
                src={imageUrl + movie.backdrop_path}
                alt="Movie Poster"
              />
              {movieName === movie && (
                <div
                  className="overlay"
                  onClick={() => {
                    if (trailer) {
                      setVideo(null);
                    } else {
                      axios
                        .get(
                          `/movie/${movie.id}/videos?language=en-US&api_key=${API_KEY}`
                        )
                        .then((res) => {
                          setVideo(res.data.results[0].key);
                        });
                    }
                  }}
                >
                  <p className="movie_name">
                    {movie.title ? movie.title : movie.name}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {trailer && <YouTube opts={opts} videoId={trailer} />}
    </div>
  );
}

export default RowPost;
