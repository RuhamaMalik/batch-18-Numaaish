import { useRef } from "react";
import "./App.css";

function App() {
  let inputRef = useRef(null);

  let handleClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.value =""
    inputRef.current.focus()
    inputRef.current.style.backgroundColor = 'yellow'
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
