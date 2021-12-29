import skillData from '../../data/skillData';
import Skill from './Skill';
import './Skill.css';

function SkillsContainer() {
  return (
    <div className='skills-container'>
      {Object.keys(skillData['Typhon']).map((skill, skillIndex) => {
        return <Skill skill={skill} skillIndex={skillIndex} key={skillIndex} />;
      })}
    </div>
  );
}

export default SkillsContainer;
