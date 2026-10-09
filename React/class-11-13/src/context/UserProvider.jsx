import { createContext, useState } from "react";

export const UserContext = createContext();
let user ={
    name:'Ruhama'
}
const UserProvider = ({ Children }) => {
  return <UserContext.Provider value={user}>{Children}</UserContext.Provider>;
};

export default UserProvider;
