import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import NavQuoteeList from '../NavQuoteeList';
import NavBarLink from '../NavBarLink';
import { selectQuotee } from '../../global-state/actions';

const NavBar = ({
  allQuotesData,
  id,
  uniqueQuotees,
  selectedQuotee,
  selectQuotee
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const allQuotesLength = 96;

  useEffect(() => {}, [selectedQuotee]);

  const handleQuoteeSelectionClick = (quoteeSelection) => {
    if (quoteeSelection !== null) {
      const firstQuoteFromQuotee = allQuotesData.find(
        (quoteData) => quoteData.quotee === quoteeSelection
      );
      navigate(`/quotes/${firstQuoteFromQuotee.jsonId}`);
    }

    selectQuotee(quoteeSelection);
    setIsOpen(false);
  };

  return (
    <nav className={isOpen ? 'open' : 'closed'}>
      {isOpen ? null : (
        <NavBarLink
          isForward={false}
          id={id}
          allQuotesLength={allQuotesLength}
        />
      )}
      {isOpen ? (
        <button className="close-button" onClick={() => setIsOpen(false)}>
          x
        </button>
      ) : null}
      {isOpen ? (
        <NavQuoteeList
          quotees={uniqueQuotees}
          handleClick={handleQuoteeSelectionClick}
        />
      ) : (
        <h2 onClick={() => setIsOpen(true)}>
          {!selectedQuotee ? 'Nootropic Cat Treats' : selectedQuotee}
        </h2>
      )}
      {isOpen ? null : (
        <NavBarLink
          isForward={true}
          id={id}
          allQuotesLength={allQuotesLength}
        />
      )}
    </nav>
  );
};

const mapStateToProps = ({ selectedQuotee }) => ({ selectedQuotee });

export default connect(mapStateToProps, { selectQuotee })(NavBar);
