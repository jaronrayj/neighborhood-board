import React from 'react'
import logo from '../images/newneighborgif.gif'

let gifstyle = {
    width: "40%",
    height: "40%",
}

function Header() {
    return <img src={logo} alt="Logo" className="header" style={gifstyle} />;
}


export default Header;
