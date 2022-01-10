import skillData from '../../data/skillData';
import Skill from './Skill';
import './Skill.css';

function SkillsContainer({ hero }) {
  return (
    <div className="hero-page-container">
      <img src={process.env.PUBLIC_URL + '/assets/illustration/' + hero + '.png'} alt={hero} className="illustration" />
      <div className="skills-container">
        {Object.keys(skillData[hero]).map((skill, skillIndex) => {
          return (
            <Skill
              hero={hero}
              skill={skill}
              skillIndex={skillIndex}
              key={skillIndex}
            />
          );
        })}
      </div>

    </div>
  );
}

export default SkillsContainer;
