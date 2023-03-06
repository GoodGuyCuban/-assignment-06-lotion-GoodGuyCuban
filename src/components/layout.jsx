import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./sidebar";



function Layout() {
    const [sidebar, setSidebar] = useState(false);

    return (
        <>  
            <ul class="navbar">
                <li><button onClick={() => setSidebar(s => !s)} type="button-left"> MENU </button></li>
                <li class="logo">
                    <h1 class="logo-center">
                        Logo
                    </h1>
                    <p>subtitle</p>
                </li>
                <li class="spacer">egg</li>
            </ul>
            <div class = "main">
                {!sidebar ? <Sidebar />  : null}
                <Outlet />
            </div>
            

        </>
    )
}

export default Layout