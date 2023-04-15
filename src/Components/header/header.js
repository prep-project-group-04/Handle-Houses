// @ts-nocheck
import "./header.css";
import NavbarTop from "../NavbarTop/NavbarTop";
import Logo from '../../assets/handlehome.png'

export default function Header(){
    return(
        <header>
            <a href="/start"><img src={Logo} alt="Logo" /></a>
            <NavbarTop/>
        </header>
    )
}