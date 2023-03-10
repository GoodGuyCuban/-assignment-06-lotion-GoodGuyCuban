import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./sidebar";
// make styled components for the navbar, make the font family arial, and the font size 14px
const Navbar = styled.ul`
    padding: 0;
    margin: 0;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: lightgray solid 1px;
    `;

function Layout() {
    const [sidebar, setSidebar] = useState(false);
    
    return (
        <>  
            <Navbar>
                <li class="selectable"><button onClick={() => setSidebar(s => !s)} type="button-left"> <h2>&#9776;</h2> </button></li>
                <li class="logo">
                    <h1 class="logo-center">
                        Lotion
                    </h1>
                    <p>Like Notion, but worse.</p>
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