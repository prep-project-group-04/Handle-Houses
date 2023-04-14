import './NavbarBottom.css';

function NavbarBottom() {
    return (
        <nav className='NavbarBottom'>
            <select>
                <option>Choose City</option>
                <option>New York City</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Washington, D.C.</option>
                <option>San Francisco</option>
                <option>Phoenix</option>
                <option>Houston</option>
            </select>
            <select>
                <option>Price Range</option>
                <option>Low to High</option>
                <option>High to Low</option>
            </select>
        </nav>
    );
}

export default NavbarBottom;
