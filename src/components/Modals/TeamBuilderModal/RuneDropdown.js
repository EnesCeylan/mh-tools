function RuneDropdown({
  runeDropdown,
  setRuneDropdown,
  selectedRune,
  setSelectedRune,
  setArtifactDropdown,
}) {
  const runes = [
    'Earth',
    'Fire',
    'Thunder',
    'Air',
    'Water',
    'Light',
    'Forest',
    'Dark',
  ];

  return (
    <div
      className={runeDropdown ? 'dropdown active' : 'dropdown'}
      onClick={(e) => {
        e.stopPropagation();
        setRuneDropdown(!runeDropdown);
        setArtifactDropdown(false);
      }}
    >
      <div className='dropdown-select'>
        <div className='group-container'>
          {selectedRune && (
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/runes/' +
                selectedRune +
                '.png'
              }
              alt={selectedRune}
            />
          )}
          <span className='select'>
            {selectedRune ? selectedRune : 'Choose Rune (optional)'}
          </span>
        </div>
        <i className='fa fa-caret-down icon'></i>
      </div>
      <div className='dropdown-list'>
        {runes.map((rune, index) => {
          return (
            <div
              className='dropdown-list-item'
              key={index}
              onClick={() => setSelectedRune(rune)}
            >
              <img
                className='rune-icon'
                src={process.env.PUBLIC_URL + '/assets/runes/' + rune + '.png'}
                alt={rune}
              />
              <span>{rune}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RuneDropdown;
