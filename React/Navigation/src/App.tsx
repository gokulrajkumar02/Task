
import { createContext, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import About from "./Component/About";
import Login from "./Component/Login";
import Contact from "./Component/Contact";

type ImageType = {
  image: boolean;
  setImage: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserContext = createContext<ImageType | null>(null);


function App() {

  const [image, setImage] = useState<boolean>(true);

  const value = useMemo(() => {
    return {image, setImage} 
  },[image])

  return (
    <UserContext.Provider value={value}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
