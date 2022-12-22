import React from 'react'
import { api } from '../api';
import Cookies from "js-cookie";

export const isLogged = () => {

  let token = Cookies.get("token");
  
  if(token){

    return true;

  }
  return false;

}

export const UserContext = React.createContext();


export const UserStorage = ({children}) => {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {

    const getUser = async () => {

        let token = Cookies.get("token");

        if(token){

          const json = await api.autoLogin(token);
          setData(json);

        }
        
    }

    getUser();

  }, []);

  return (
    <UserContext.Provider value={data}>
        {children}
    </UserContext.Provider>
  )
}
