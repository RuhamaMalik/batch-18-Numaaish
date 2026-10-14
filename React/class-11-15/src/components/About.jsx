import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const About = () => {
  const {currentStyle} = useContext(ThemeContext);
  return (
    <div style={currentStyle?.base} >
      <h1 className="text-4xl font-bold p-4 bg-abcd "  >About Page</h1>
      <p className="p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illo,
        distinctio molestiae dolorum repellendus suscipit, sapiente laboriosam
        odio vero dolor ducimus consequatur cumque. Atque reiciendis maiores
        suscipit veritatis aliquid praesentium corrupti, quidem porro quo!
        Suscipit deleniti consequatur voluptatem quasi nulla, veniam laudantium
        blanditiis consequuntur, natus ipsa aspernatur doloremque atque
        corrupti!
      </p>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTloD2RjlwQivycLEIxNAlhqDSM6x-ogdOgCOISymcDW4dR-MuozqtNWJt0&s=10" alt="" />

      <button className="px-14 py-5 m-4 " style={currentStyle.button}  >Click Me</button>
    </div>
  );
};

export default About;
