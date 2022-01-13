import FormationPosition from './FormationPosition';

function BuildContainer({ teamData, setTeamData, handleClick, setSelectedElement }) {
  return (
    <div className='build-container'>
      <div className='row back'>
        <FormationPosition
          teamData={teamData}
          setTeamData={setTeamData}
          handleClick={handleClick}
          setSelectedElement={setSelectedElement}
          position={2}
        />
        <FormationPosition
          teamData={teamData}
          setTeamData={setTeamData}
          handleClick={handleClick}
          setSelectedElement={setSelectedElement}
          position={3}
        />
        <FormationPosition
          teamData={teamData}
          setTeamData={setTeamData}
          handleClick={handleClick}
          setSelectedElement={setSelectedElement}
          position={4}
        />
      </div>
      <div className='row front'>
        <FormationPosition
          teamData={teamData}
          setTeamData={setTeamData}
          handleClick={handleClick}
          setSelectedElement={setSelectedElement}
          position={0}
        />
        <FormationPosition
          teamData={teamData}
          setTeamData={setTeamData}
          handleClick={handleClick}
          setSelectedElement={setSelectedElement}
          position={1}
        />
      </div>
    </div>
  );
}

export default BuildContainer;
