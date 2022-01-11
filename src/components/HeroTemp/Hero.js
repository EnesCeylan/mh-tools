import { useParams } from 'react-router-dom';
import './Hero.css';
import SkillsContainer from './SkillsContainer';

function Hero({ setShowMenu }) {
  const { heroName } = useParams();

  return (
    <section className='hero-container' onClick={() => setShowMenu(false)}>
      <SkillsContainer hero={heroName.replace(/-/g, ' ')} />
    </section>
  );
}

export default Hero;
