import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

const Appcontext = React.createContext();
const api =
  "https://api.unsplash.com/search/photos?page=1&query=office&client_id=PKcvZLxeRwjH7qraPedvxUsSi0L-gtL64Ri8BeACpzQ";
const intialState = {
  name: "",
  image: "",
  services: [{}],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const upDateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "New World",
        image: "./image/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "About World",
        image: "./image/about1.svg",
      },
    });
  };

  const servicePage = async (url) => {
    try {
      const api = await fetch(url);
      const data = await api.json();
      const objeact = data.results;

      dispatch({
        type: "GET_SERVICES",
        payload: objeact,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    servicePage(api);
  }, []);

  return (
    <Appcontext.Provider value={{ ...state, upDateHomePage, updateAboutPage }}>
      {children}
    </Appcontext.Provider>
  );
};

const useGloableContex = () => {
  return useContext(Appcontext);
};

export { AppProvider, Appcontext, useGloableContex };
