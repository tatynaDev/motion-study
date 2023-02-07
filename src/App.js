import React, {useEffect, useState} from 'react'
import './App.scss';
import Loading from "./components/Loading/Loading";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import StudyAbroad from "./components/StudyAbroad/StudyAbroad";
import Contacts from "./components/Contacts/Contacts";

function App() {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 5800);}, []);

  return (
    <div className="App">
      <Loading load={load}/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/AboutUs'} element={<AboutUs/>}/>
        <Route path={'/StudyAbroad'} element={<StudyAbroad/>}/>
        <Route path={'/Contacts'} element={<Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;
