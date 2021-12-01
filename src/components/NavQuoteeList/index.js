import React from 'react';

const NavQuoteeList = ({ quotees, handleClick }) => {
  return (
    <ul>
      <li>
        <button
          className="quotee-select-button"
          onClick={() => handleClick(null)}
        >
          All
        </button>
      </li>
      {quotees.map((quotee, i) => (
        <li key={i}>
          <button
            onClick={() => handleClick(quotee)}
            className="quotee-select-button"
          >
            {quotee}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavQuoteeList;
