import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";



const Sidebar = () => {
    return (
        <>
            <ul class="sidebar">
                <li>Notes</li>
                <li><button type="button">NewNote</button></li>
            </ul>
        </>
    )
}

export default Sidebar

