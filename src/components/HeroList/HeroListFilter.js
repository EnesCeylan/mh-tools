import FactionFilter from './FactionFilter';
import RarityFilter from './RarityFilter';
import RoleFilter from './RoleFilter';
import './HeroListFilter.css';

function HeroListFilter({
  setSelectedFaction,
  selectedFaction,
  setSelectedRarity,
  selectedRarity,
  setSelectedRole,
  selectedRole,
}) {
  return (
    <div className='filters-container'>
      <RarityFilter
        selectedRarity={selectedRarity}
        setSelectedRarity={setSelectedRarity}
      />
      <RoleFilter
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
      />
      <FactionFilter
        selectedFaction={selectedFaction}
        setSelectedFaction={setSelectedFaction}
      />
    </div>
  );
}

export default HeroListFilter;
