// @ts-nocheck
import React, { useRef } from 'react';
import './NavbarBottom.css';

function NavbarBottom() {
  const cityRef = useRef();
  const priceRangeRef = useRef();

  const cities = [
    "New York",
    "Staten Island",
    "Woodside",
    "Forest Hills",
    "Elmhurst",
    "Flushing",
    "Bayside",
    "South Ozone Park",
    "Queens Village",
    "Jackson Heights",
    "Bronx",
    "Long Island City",
    "Floral Park",
    "Brooklyn",
    "Queens",
    "Manhattan",
    "Howard Beach",
    "Fresh Meadows",
    "College Point",
    "Middle Village",
    "Beechhurst",
    "Oakland Gardens",
    "Rosedale",
    "Kew Gardens Hills",
    "Whitestone",
    "Kew Gardens",
    "Astoria"
  ];

  const handleButtonClick = () => {
    if (cityRef.current && priceRangeRef.current) {
      console.log('Selected city:', cityRef.current.value);
      console.log('Selected price range:', priceRangeRef.current.value);
    }
  };

  return (
    <div className='filter'>
      <nav className='NavbarBottom'>
        <select ref={cityRef} name="city" size="1">
          <option value="noChoice">Choose City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
        <select ref={priceRangeRef} name="price-range">
          <option value="noChoice">Price Range</option>
          <option value="85k-599k">85k-599k</option>
          <option value="599k-948k">599k-948k</option>
          <option value="949k-1.7m">949k-1.7m</option>
          <option value="1.7m-11m">1.7m-11m</option>
        </select>
        <div onClick={handleButtonClick}><i class="fa-solid fa-magnifying-glass fa-rotate-90"></i></div>
      </nav>
    </div>
  );
}

export default NavbarBottom;
