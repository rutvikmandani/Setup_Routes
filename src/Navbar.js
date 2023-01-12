import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return(
        <>
            <div className="navbar">
            <NavLink className="menu" to="/"> Home </NavLink>
            <NavLink className="menu" to="/About"> About </NavLink>
            <NavLink className="menu" to="/Contact"> Contact </NavLink>
            <NavLink className="menu" to="/Search"> Search </NavLink>
            <NavLink className="menu" to="/Post/laptop"> Post </NavLink>
            <NavLink className="menu" to="/Post/laptop/1"> PostID </NavLink>
            <NavLink className="menu" to="/Base"> Base </NavLink>
            </div>
        </>
    )
}

export default Navbar;