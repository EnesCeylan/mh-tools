import FormationPosition from './FormationPosition';

function BuildContainerReverse({
  validParamExists,
  teamData,
  setTeamData,
  handleClick,
  setSelectedElement,
}) {
  return (
    <div className='build-container reverse'>
      <div className='row back'>
        <FormationPosition
          validParamExists={validParamExists}
          teamData={teamData}
          setTeamData={setTeamData}
          handleClick={handleClick}
          setSelectedElement={setSelectedElement}
          position={0}
        />
        <FormationPosition
          validParamExists={validParamExists}
          teamData={teamData}
          setTeamData={setTeamData}
          handleClick={handleClick}
          setSelectedElement={setSelectedElement}
          position={1}
        />
      </div>
      <div className='row front'>
        <FormationPosition
          validParamExists={validParamExists}
          teamData={teamData}
          setTeamData={setTeamData}
          handleClick={handleClick}
          setSelectedElement={setSelectedElement}
          position={2}
        />
        <FormationPosition
          validParamExists={validParamExists}
          teamData={teamData}
          setTeamData={setTeamData}
          handleClick={handleClick}
          setSelectedElement={setSelectedElement}
          position={3}
        />
        <FormationPosition
          validParamExists={validParamExists}
          teamData={teamData}
          setTeamData={setTeamData}
          handleClick={handleClick}
          setSelectedElement={setSelectedElement}
          position={4}
        />
      </div>
    </div>
  );
}

export default BuildContainerReverse;
