import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router";
const Banner = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  const showSearchHandler = () => {
    setShowSearch((prev) => (prev = !showSearch));
  };
  const searchHandler = () => {
    history.push("/search");
  };
  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          variant="outlined"
          className="banner__searchButton"
          onClick={showSearchHandler}>
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner__info">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h5>Expedita laboriosam consequuntur ab porro</h5>
        <Button variant="outlined" onClick={searchHandler}>
          Get started
        </Button>
      </div>
    </div>
  );
};

export default Banner;
