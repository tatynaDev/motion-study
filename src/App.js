import React, {useEffect, useState} from 'react'
import './App.scss';
import Loading from "./components/Loading/Loading";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import StudyAbroad from "./components/StudyAbroad/StudyAbroad";
import Contacts from "./components/Contacts/Contacts";
import Choose from "./components/StudyAbroad/Choose";
import UnitedStates from "./components/StudyAbroad/countries/UnitedStates";
import Solbrige from "./components/StudyAbroad/Universities/Solbrige";

function App() {
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        }, 3200);
    }, []);

    return (
        <div className="App">
            <Loading load={load}/>
            <div style={{
                display: load ? 'none' : 'block'
            }}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/AboutUs'} element={<AboutUs/>}/>
                    <Route path={'/StudyAbroad'} element={<StudyAbroad/>}/>
                    <Route path={'/Contacts'} element={<Contacts/>}/>
                    <Route path={'/choose'} element={<Choose/>}/>
                    <Route path={'/unitedStates'} element={<UnitedStates/>}/>
                    <Route path={'//university'} element={<Solbrige/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
