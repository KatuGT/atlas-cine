import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="pelicula">Pelicula</NavLink>

    </div>
  )
}

export default Navbar