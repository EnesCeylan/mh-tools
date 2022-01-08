function ArtifactDropdown({
  artifactDropdown,
  setArtifactDropdown,
  selectedArtifact,
  setSelectedArtifact,
  setRuneDropdown,
  width,
}) {
  const artifacts = [
    'Axe of Pangu',
    'Staff of Sharur',
    'Sudarshana Chakra',
    'Yasakani Magatama',
    'Excalibur',
    "Thor's Hammer",
    'Scarab Badge',
    'Aegis Shield',
  ];
  return (
    <div
      className={artifactDropdown ? 'dropdown active' : 'dropdown'}
      onClick={(e) => {
        e.stopPropagation();
        setArtifactDropdown(!artifactDropdown);
        setRuneDropdown(false);
        if (width < 950) {
          setTimeout(() => {
            document.getElementById('artifact-dropdown').scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }, 0);
        }
      }}
    >
      <div className='dropdown-select'>
        <div className='group-container'>
          {selectedArtifact && (
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/artifacts/' +
                selectedArtifact.replace(/ /g, '_') +
                '.png'
              }
              alt={selectedArtifact}
            />
          )}
          <span className='select'>
            {selectedArtifact ? selectedArtifact : 'Choose artifact'}
          </span>
        </div>
        <i className='fa fa-caret-down icon'></i>
      </div>
      <div className='dropdown-list artifact' id='artifact-dropdown'>
        {artifacts.map((artifact, index) => {
          return (
            <div
              className='dropdown-list-item'
              key={index}
              onClick={() => setSelectedArtifact(artifact)}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/artifacts/' +
                  artifact.replace(/ /g, '_') +
                  '.png'
                }
                alt={artifact}
              />
              <span>{artifact}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArtifactDropdown;
