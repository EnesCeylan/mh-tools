import Skill from "./Skill";
import { useState } from "react";
import './HeroPageSkill.css'
const SkillsContainer = ({ heroName }) => {
    const skills = ['1', '2', '3', '4'];
    const [currentSkill, setCurrentSkill] = useState('1')
    const hero = heroName.replace(/-/g, '_')
    return (
        <div>
            {skills.map((skill, index) => (
                <img
                    src={
                        process.env.PUBLIC_URL +
                        '/assets/hero/skill-icons/' +
                        hero +
                        '_' +
                        skill +
                        '.png'
                    }
                    alt={hero + '_' + skill}
                    onClick={() => setCurrentSkill(skill)}
                    key={index}
                    className="hero-skill-icon"
                />
            ))}
            <Skill hero={heroName.replace(/-/g, ' ')} skillVal={currentSkill} />
        </div>
    );
}

export default SkillsContainer;