import React from 'react'
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
       <li><NavLink to ="/chat">Let's chat</NavLink></li>
       <li><NavLink to ="/">DashBoard</NavLink></li>
       <li><NavLink to ="/">Log Out</NavLink></li>
       <li><NavLink to ="/" className='btn btn-floating pink lighten-1'>PM</NavLink></li>
    </ul>
  )
}

export default SignedInLinks