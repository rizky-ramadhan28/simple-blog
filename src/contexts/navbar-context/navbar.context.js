import React, { createContext, useState, useEffect } from "react";

export const NavbarContext = createContext();

const NavbarContextProvider = (props) => {
  const [currentImage, setCurrentImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://source.unsplash.com/1600x900/?nature").then((response) => {
      setCurrentImage(response.url);
      setLoading(false);
    });
  }, []);

  return (
    <NavbarContext.Provider value={{ loading, currentImage }}>
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
