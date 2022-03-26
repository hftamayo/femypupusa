import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../assets/banner.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>Let's order pupusas</h1>
          <HeaderCartButton onClick={} />
          </header>
          <div className={classes['main-image']}>
              <img src={mealsImage} alt="all you can eat pupusas" />
              </div>
    </Fragment>
  );
};


export default Header;