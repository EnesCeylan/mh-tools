function FactionFilter({ selectedFaction, setSelectedFaction }) {
  const handleFactionFilter = (faction) => {
    if (selectedFaction !== faction) {
      setSelectedFaction(faction);
    } else {
      setSelectedFaction('');
    }
  };

  return (
    <div className='faction-filters'>
      <button
        className={
          selectedFaction === 'Luminarch'
            ? 'filter luminarch active'
            : 'filter luminarch'
        }
        onClick={() => handleFactionFilter('Luminarch')}
      ></button>
      <button
        className={
          selectedFaction === 'Shadowarch'
            ? 'filter shadowarch active'
            : 'filter shadowarch'
        }
        onClick={() => handleFactionFilter('Shadowarch')}
      ></button>
      <button
        className={
          selectedFaction === 'Guardian'
            ? 'filter guardian active'
            : 'filter guardian'
        }
        onClick={() => handleFactionFilter('Guardian')}
      ></button>
      <button
        className={
          selectedFaction === 'Verdian'
            ? 'filter verdian active'
            : 'filter verdian'
        }
        onClick={() => handleFactionFilter('Verdian')}
      ></button>
    </div>
  );
}

export default FactionFilter;
