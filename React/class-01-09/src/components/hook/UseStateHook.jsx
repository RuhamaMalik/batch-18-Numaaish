// import { useState } from "react";

import { useState } from "react";

// const UseStateHook = () => {

//   let [user, setUser] = useState({ name: "Fatima", email: "fatima@gmail.com" });

//   const addUser = () => {
//     setUser({...user,  contact:263726372})
//   };

//   console.log(user);

//   return (
//     <>
//     <li>Name : {user?.name}</li>
//     <li>Email : {user?.email}</li>
//     <li>Contact : {user?.contact}</li>
//       <button onClick={addUser}>ADD User</button>
//     </>
//   );
// };

// export default UseStateHook;

const UseStateHook = () => {
  let [theme, setTheme] = useState(false);

  return (
    <>
      <h1>{theme ? "Light" : "Dark"}</h1>
      <button onClick={() => setTheme((prev) => !prev)}>Update Theme</button>

      {theme && (
        <>
          <li>tab1 </li>
          <li>tab1 </li>
          <li>tab1 </li>
          <li>tab1 </li>
          <li>tab1 </li>
          <li>tab1 </li>
        </>
      )}
    </>
  );
};

export default UseStateHook;
