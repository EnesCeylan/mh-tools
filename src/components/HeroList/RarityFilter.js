function RarityFilter({ selectedRarity, setSelectedRarity }) {
  const handleRarityFilter = (rarity) => {
    if (selectedRarity !== rarity) {
      setSelectedRarity(rarity);
    } else {
      setSelectedRarity('');
    }
  };

  return (
    <div className='rarity-filters'>
      <button
        className={selectedRarity === 'UR' ? 'filter ur active' : 'filter ur'}
        onClick={() => handleRarityFilter('UR')}
      ></button>
      <button
        className={
          selectedRarity === 'SSR' ? 'filter ssr active' : 'filter ssr'
        }
        onClick={() => handleRarityFilter('SSR')}
      ></button>
    </div>
  );
}

export default RarityFilter;
