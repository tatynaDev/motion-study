import React from 'react';
import solImg from '../../../img/sol.svg'
import SolbrigeTab from "./SolbrigeTab";



const Solbrige = () => {
    return (
        <section id='sol'>
            <div className="container">
                <div className="sol">
                    <h1 style={{color:'#1AA2EE'}}>Solbrige University</h1>
                    <div className="sol--block">
                        <img src={solImg} alt=""/>
                        <div className="sol--block__right">
                            <div className="loc"><h2 style={{color: '#BBBBBB'}}>Location :<span
                                style={{color: '#212121'}}>    Australia,Milan,Rim</span></h2></div>
                            <div className="loc"><h2 style={{color: '#BBBBBB'}}>Date of foundation :<span
                                style={{color: '#212121'}}>      1996</span></h2></div>
                            <div className="loc"><h2 style={{color: '#BBBBBB'}}>Type of programs :<span
                                style={{color: '#212121'}}>         Bachelor Course Magistracy</span></h2></div>
                            <div className="loc def"><h2 style={{color: '#BBBBBB', display:'flex'}}>Specialities : <span
                                style={{color: '#212121'}}>    <span style={{display:'flex', flexDirection:'column', marginLeft:'15px'}}>
                                Fashion and Design
                                <br/>Jewerly design
                                <br/>Shoe design
                                <br/>Interior design
                                <br/>landscape design
                                <br/>Car design
                                <br/>Photography</span>
                            </span></h2></div>
                            <div className="loc"><h2 style={{color: '#BBBBBB'}}>Language :    <span
                                style={{color: '#212121'}}>         english,Italian</span></h2></div>

                        </div>
                    </div>
                    <SolbrigeTab/>
                </div>
            </div>
        </section>
    );
};

export default Solbrige;