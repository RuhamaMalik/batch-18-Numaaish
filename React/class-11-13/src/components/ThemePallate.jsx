import { Button } from "flowbite-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const ThemePallate = () => {
let {setTheme,currentStyle} = useContext(ThemeContext)

  return (
   <div className="flex flex-wrap gap-2">
      <Button onClick={()=> setTheme('dark')} color="dark">Dark</Button>
      <Button onClick={()=> setTheme('light')} color="light">Light</Button>
      <Button onClick={()=> setTheme('red')} color="red">Red</Button>
      <Button onClick={()=> setTheme('purple')} color="purple">Purple</Button>
    </div>
  )
}

export default ThemePallate