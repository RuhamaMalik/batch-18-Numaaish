import React from "react";

// const Button = (props) => {
const Button = ({myTitle,second}) => {
myTitle = 'ABCDEFG'
// console.log(props);


  return <>
  
  {/* <button>{props.myTitle}</button> <br /><br /> */}
  
  <button>{myTitle || 'Logout' } -------------  {second || 'abcd second'} </button> <br /><br />
  
  </>;
};

export default Button;
