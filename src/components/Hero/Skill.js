import skillData from '../../data/skillData';

function Skill({ hero, skill, skillIndex }) {
  return (
    <div className='skill'>
      <div className='skill-header'>
        <img
          src={
            process.env.PUBLIC_URL +
            '/assets/hero/skill-icons/' +
            hero.replace(/ /g, '_') +
            '_' +
            (skillIndex + 1) +
            '.png'
          }
          alt={hero + ' ' + skill + ' icon'}
          className='skill-icon'
        />
        <div className='header-texts'>
          <h4 className='skill-name'>{skillData[hero][`${skill}`].name}</h4>
          <span className='skill-type'>{skillData[hero][`${skill}`].type}</span>
        </div>
      </div>
      {/*------------------------------------------------------------------------------------------------*/}
      <div className='skill-info'>
        {Object.keys(skillData[hero][`${skill}`].description).map(
          (level, levelIndex) => {
            if (level === 'lv1') {
              return (
                <p className='first-level' key={levelIndex}>
                  {skillData[hero][`${skill}`].description[`${level}`].map(
                    (piece, pieceIndex) => {
                      if (piece.type === 'value') {
                        return (
                          <span className='highlight' key={pieceIndex}>
                            {piece.content}
                          </span>
                        );
                      } else if (piece.type === 'line-break') {
                        return <br key={pieceIndex} />;
                      } else if (piece.type === 'text') {
                        return piece.content;
                      } else {
                        return (
                          <span
                            className={'highlight-' + piece.type}
                            key={pieceIndex}
                          >
                            {piece.content}
                          </span>
                        );
                      }
                    }
                  )}
                </p>
              );
            } else {
              return (
                <p key={levelIndex}>
                  {skillData[hero][`${skill}`].description[`${level}`]}
                </p>
              );
            }
          }
        )}
      </div>
    </div>
  );
}

export default Skill;
