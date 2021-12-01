import React from 'react';

const NavQuoteeList = ({ quotees, handleClick }) => {
  return (
    <ul>
      <li onClick={() => handleClick(null)}>All</li>
      {quotees.map((quotee, i) => (
        <li onClick={() => handleClick(quotee)} key={i}>
          {quotee}
        </li>
      ))}
    </ul>
  );
};

export default NavQuoteeList;
