import { useParams } from 'react-router-dom';
import './Hero.css';
import SkillsContainer from './SkillsContainer';

function Hero() {
  const { heroName } = useParams();

  return <SkillsContainer hero={heroName.replace(/-/g, ' ')} />;
}

export default Hero;
