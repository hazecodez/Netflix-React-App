import React from "react";
import "./StyleSheets/App.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import RowPost from "./Components/RowPost";
import {
  trendingUrl,
  horrorUrl,
  originalsUrl,
  actionUrl,
  romanceUrl,
  comedyUrl,
  historyUrl,
  sci_fiUrl
} from "./Constants/Constants";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost data={{ Genre: "Trending Now", url: trendingUrl }} />
      <RowPost data={{ Genre: "Sci-Fiction", url: sci_fiUrl }} />
      <RowPost data={{ Genre: "Horror", url: horrorUrl }} />
      <RowPost data={{ Genre: "Originals", url: originalsUrl }} />
      <RowPost data={{ Genre: "Action", url: actionUrl }} />
      <RowPost data={{ Genre: "Romance", url: romanceUrl }} />
      <RowPost data={{ Genre: "Comedy", url: comedyUrl }} />
      <RowPost data={{ Genre: "History", url: historyUrl }} />
      <Footer/>
    </div>
  );
}

export default App;
