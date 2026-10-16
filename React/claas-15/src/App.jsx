// import { useRef } from "react";
// import "./App.css";

// function App() {
//   let inputRef = useRef(null);

//   let handleClick = () => {
//     console.log(inputRef.current.value);
//     inputRef.current.value =""
//     inputRef.current.focus()
//     inputRef.current.style.backgroundColor = 'yellow'
//   };
//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// }

// export default App;

import gsap from "gsap";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button
} from "flowbite-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Card from "./component/Card";


const App = () => {
  const cardRef = useRef([]);
  const navRef = useRef([]);
  const heroRef = 

  useGSAP(() => {
    gsap.from(navRef.current, {
      x: 25,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });

    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 1,
      stagger: 0.5,
    });
  });

  let links = [
    {
      link: "/about",
      text: "About",
      icon: "fa fa-solid",
    },
    {
      link: "/about",
      text: "Services",
      icon: "fa fa-solid",
    },
    {
      link: "/about",
      text: "Pricing",
      icon: "fa fa-solid",
    },
    {
      link: "/contact",
      text: "Contact",
      icon: "fa fa-solid",
    },
  ];

  return (
    <>
      <Navbar fluid rounded>
        <NavbarBrand href="https://flowbite-react.com">
          <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          {links?.map((e, i) => (
            <NavbarLink
              key={i}
              ref={(el) => (navRef.current[i] = el)}
              href="#"
              active
            >
              {e.text || "link text"}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>

      <section className="min-h-screen flex flex-wrap gap-4 items-center content-center justify-center p-5 bg-indigo-500 w-screen">
        <h1 className="text-5xl font-bold">Hello Lorem, ipsum dolor.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          incidunt numquam repellat ut cupiditate voluptates maiores dicta
          perspiciatis vitae possimus sunt, exercitationem alias cumque dolorem
          labore consectetur a! Similique, praesentium?
        </p>
         <Button color="alternative">Profile</Button>
      </section>


      <section className="min-h-screen flex flex-wrap gap-4 justify-center p-5 bg-amber-500 w-screen">
        {[1, 2, 3, 4, 5, 6, 7, 8]?.map((e, i) => (
          <Card
            key={i}
            product={e}
            text={12345}
            ref={(el) => (cardRef.current[i] = el)}
          />
        ))}
      </section>
    </>
  );
};

export default App;
