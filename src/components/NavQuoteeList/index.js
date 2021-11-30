import React from 'react';

const NavQuoteeList = ({ quotees, handleClick }) => {
  return (
    <ul>
      {quotees.map((quotee, i) => (
        <li onClick={handleClick} key={i}>
          {quotee}
        </li>
      ))}
    </ul>
  );
};

export default NavQuoteeList;
