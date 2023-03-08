import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./sidebar";
// make styled components for the navbar, make the font family arial, and the font size 14px
const Navbar = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: black solid 1px;
    `;

function Layout() {
    const [sidebar, setSidebar] = useState(false);
    
    return (
        <>  
            <Navbar>
                <li><button onClick={() => setSidebar(s => !s)} type="button-left"> MENU </button></li>
                <li class="logo">
                    <h1 class="logo-center">
                        Logo
                    </h1>
                    <p>subtitle</p>
                </li>
                <li class="spacer">egg</li>
            </Navbar>
            <div class = "main">
                {!sidebar ? <Sidebar />  : null}
                <Outlet />
            </div>
            

        </>
    )
}

export default Layout