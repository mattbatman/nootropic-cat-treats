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
  const [playlist, setPlaylist] = useState([]);
  const allQuotesLength = playlist.length;

  useEffect(() => {
    const quotesOfSelectedQuotee = !selectedQuotee
      ? allQuotesData
      : allQuotesData.filter(
          (quoteData) => quoteData.quotee === selectedQuotee
        );

    setPlaylist(quotesOfSelectedQuotee);
  }, [selectedQuotee, allQuotesData]);

  const handleQuoteeSelectionClick = (quoteeSelection) => {
    if (quoteeSelection !== null) {
      const firstQuoteFromQuotee = allQuotesData.find(
        (quoteData) => quoteData.quotee === quoteeSelection
      );
      navigate(`/quotes/${firstQuoteFromQuotee.id}`);
    }

    selectQuotee(quoteeSelection);
    setIsOpen(false);
  };

  return (
    <nav className={isOpen ? 'open' : 'closed'}>
      {isOpen ? (
        <button className="close-button" onClick={() => setIsOpen(false)}>
          x
        </button>
      ) : null}
      {isOpen ? null : (<NavBarLink backwardOrForward="backward" id={id} playlist={playlist} />)}
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
      {isOpen ? null : <NavBarLink backwardOrForward="forward" id={id} playlist={playlist} />}
    </nav>
  );
};

const mapStateToProps = ({ selectedQuotee }) => ({ selectedQuotee });

export default connect(mapStateToProps, { selectQuotee })(NavBar);
