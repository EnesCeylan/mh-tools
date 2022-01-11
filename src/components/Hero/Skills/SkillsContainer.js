import Skill from "./Skill";
import { useState } from "react";

const SkillsContainer = ({ heroName }) => {
    const skills = ['1', '2', '3', '4'];
    const [currentSkill, setCurrentSkill] = useState('1')
    return (
        <div>
            {skills.map((skill, index) => (
                <img
                    src={
                        process.env.PUBLIC_URL +
                        '/assets/hero/skill-icons/' +
                        heroName +
                        '_' +
                        skill +
                        '.png'
                    }
                    alt={heroName + '_' + skill}
                    onClick={() => setCurrentSkill(skill)}
                    key={index}
                />
            ))}
            <Skill hero={heroName.replace(/-/g, ' ')} skillVal={currentSkill} />
        </div>
    );
}

export default SkillsContainer;