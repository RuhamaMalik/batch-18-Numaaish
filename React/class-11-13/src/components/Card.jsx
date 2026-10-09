import React, { useContext } from "react";
import Badge from "./Badge";
import {  ThemeContext } from "../App";

const Card = () => {
    let {theme,setTheme} = useContext(ThemeContext);

  return (
    <>
      <hr />
      <h1>Product card</h1>
      <Badge />
      <button onClick={()=>setTheme((prev)=> !prev)} >Update Theme : "{theme ? 'light':'dark'}"</button> 
      <hr />
    </>
  );
};

export default Card;
