function RoleFilter({ selectedRole, setSelectedRole }) {
  const handleRoleFilter = (role) => {
    if (selectedRole !== role) {
      setSelectedRole(role);
    } else {
      setSelectedRole('');
    }
  };

  return (
    <div className='role-filters'>
      <button
        className={
          selectedRole === 'Mage' ? 'filter mage active' : 'filter mage'
        }
        onClick={() => handleRoleFilter('Mage')}
      ></button>
      <button
        className={
          selectedRole === 'Fighter'
            ? 'filter fighter active'
            : 'filter fighter'
        }
        onClick={() => handleRoleFilter('Fighter')}
      ></button>
      <button
        className={
          selectedRole === 'Tank' ? 'filter tank active' : 'filter tank'
        }
        onClick={() => handleRoleFilter('Tank')}
      ></button>
      <button
        className={
          selectedRole === 'Support'
            ? 'filter support active'
            : 'filter support'
        }
        onClick={() => handleRoleFilter('Support')}
      ></button>
    </div>
  );
}

export default RoleFilter;
