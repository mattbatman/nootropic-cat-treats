import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import NavPlaylistButton from '../NavPlaylistButton';
import NavPlaylistCloseButton from '../NavPlaylistCloseButton';
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
        <NavPlaylistCloseButton
          handleClick={() => setIsOpen(false)}
        />
      ) : (
          <NavPlaylistButton
            className="open-button"
            handleClick={() => setIsOpen(true)}
          />
      )}
      {isOpen ? null : (
        <NavBarLink backwardOrForward="backward" id={id} playlist={playlist} />
      )}
      {isOpen ? (
        <NavQuoteeList
          quotees={uniqueQuotees}
          handleClick={handleQuoteeSelectionClick}
        />
      ) : (
        <button onClick={() => setIsOpen(true)} className="playlist-button">
          <span className="playlist-button-text">
              {!selectedQuotee ? 'Nootropic Cat Treats' : selectedQuotee}
            </span>
        </button>
      )}
      {isOpen ? null : (
        <NavBarLink backwardOrForward="forward" id={id} playlist={playlist} />
      )}
    </nav>
  );
};

const mapStateToProps = ({ selectedQuotee }) => ({ selectedQuotee });

export default connect(mapStateToProps, { selectQuotee })(NavBar);
