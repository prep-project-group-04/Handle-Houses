// @ts-nocheck
import "./header.css";
import NavbarTop from "../NavbarTop/NavbarTop";
import Logo from '../../assets/handlehome.png';
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link to="/"><img src={Logo} alt="Logo" /></Link>
            <NavbarTop/>
        </header>
    )
}