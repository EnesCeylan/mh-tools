import caret from '../../../assets/web-icons/caret.png';

function RuneDropdown({ runeDropdown, setRuneDropdown, selectedRune, setSelectedRune, setArtifactDropdown, width }) {
  const runes = ['Earth', 'Fire', 'Thunder', 'Air', 'Water', 'Light', 'Forest', 'Dark'];

  return (
    <div
      className={runeDropdown ? 'dropdown active' : 'dropdown'}
      onClick={(e) => {
        e.stopPropagation();
        setRuneDropdown(!runeDropdown);
        setArtifactDropdown(false);
        if (width < 950) {
          setTimeout(() => {
            document.getElementById('rune-dropdown').scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }, 0);
        }
      }}
    >
      <div className='dropdown-select'>
        <div className='group-container'>
          {selectedRune && (
            <img src={process.env.PUBLIC_URL + '/assets/runes/' + selectedRune + '.png'} alt={selectedRune} />
          )}
          <span className='select'>{selectedRune ? selectedRune : 'Choose Rune'}</span>
        </div>
        <img className='web-icon' src={caret} alt='caret' />
      </div>
      <div className='dropdown-list rune' id='rune-dropdown'>
        {runes.map((rune, index) => {
          return (
            <div className='dropdown-list-item' key={index} onClick={() => setSelectedRune(rune)}>
              <img className='rune-icon' src={process.env.PUBLIC_URL + '/assets/runes/' + rune + '.png'} alt={rune} />
              <span>{rune}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RuneDropdown;
