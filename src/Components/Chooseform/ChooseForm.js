import React from "react";
import "./ChooseForm.css";
import { useState } from "react";
import SideNavbarDoc from "../SideNavbar/SideNavbarDoc";

const ChooseForm = () => {

    return (
        <div>
            {/* <SideNavbarDoc /> */}
            <div className="chooseForm">
                <h1>Выберите форму заявления</h1>
                <div className="diffForm">
                    <div><a href="#"><button>Форма 3В</button></a></div>
                    <div><a href="#"><button>Форма 4Б</button></a></div>
                    <div><a href="#"><button>Форма 4В</button></a></div>
                </div>
            </div>
        </div>
    )
}

export default ChooseForm;