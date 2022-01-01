import skillData from '../../data/skillData';
import Skill from './Skill';
import './Skill.css';

function SkillsContainer({ hero }) {
  return (
    <div className='skills-container'>
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
  );
}

export default SkillsContainer;
