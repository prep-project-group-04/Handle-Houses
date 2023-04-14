import React, { useRef } from 'react';
import './NavbarBottom.css';

function NavbarBottom() {
  const cityRef = useRef();
  const priceRangeRef = useRef();

  const handleButtonClick = () => {
    console.log('Selected city:', cityRef.current.value);
    console.log('Selected price range:', priceRangeRef.current.value);
  };

  return (
    <nav className='NavbarBottom'>
      <select ref={cityRef} name="city">
        <option value="">Choose City</option>
        <option value="New York City">New York City</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
        <option value="Washington, D.C.">Washington, D.C.</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Phoenix">Phoenix</option>
        <option value="Houston">Houston</option>
      </select>
      <select ref={priceRangeRef} name="price-range">
        <option value="">Price Range</option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select>
      <button onClick={handleButtonClick}>Search</button>
    </nav>
  );
}

export default NavbarBottom;
