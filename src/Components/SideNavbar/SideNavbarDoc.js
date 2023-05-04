import { useState, useEffect } from "react";
import React from "react";
import "./SideNavbar.css"
import { Link } from "react-router-dom";
import Active from "../../Store/store.js";
import { observer } from "mobx-react-lite";
import ChooseForm from "../Chooseform/ChooseForm";

const SideNavbarDoc = observer(() => {
    // const AStatement = () => {
    //     Active.ActiveStatement();
    // }
    const statement = "default";
    const form = "default";
    const os = "default";
    const psi = "default";
    const property = "default";


    return (
        <div className="sideNav">
            {/* <button onClick={() => AStatement()}>ЗАЯВЛЕНИЕ</button> */}
            {/*             
            <Link to="/form17" onClick={ActiveForm}>ФОРМА 17</Link>
            <Link to="/os" onClick={ActiveOs}>ОС</Link>
            <Link to="/psi" onClick={ActivePsi}>ПСИ</Link>
            <Link to="/property" onClick={ActiveProperty}>ДОКУМЕНТЫ НА СОБСТВЕННОСТЬ</Link>  */}
            <Link to="/statement" className={statement}>ЗАЯВЛЕНИЕ</Link>
            <Link to="/form17" className={form}>ФОРМА 17</Link>
            <Link to="/os" className={os}>ОС</Link>
            <Link to="/psi" className={psi}>ПСИ</Link>
            <Link to="/property" className={property}>ДОКУМЕНТЫ НА СОБСТВЕННОСТЬ</Link>
        </div>
    )
});

export default SideNavbarDoc;