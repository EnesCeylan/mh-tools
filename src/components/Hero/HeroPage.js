import { useParams } from 'react-router-dom';
import './HeroPage.css';
//import SkillsContainer from './HeroPageContainer';
import HeroPageContainer from './HeroPageContainer';
function Hero({ setShowMenu }) {
  const { heroName } = useParams();

  return (
    // <section className='hero-container' onClick={() => setShowMenu(false)}>
    //   <SkillsContainer hero={heroName.replace(/-/g, ' ')} />
    // </section>
    <section className='hero-container' onClick={() => setShowMenu(false)}>
      <img
        src={
          process.env.PUBLIC_URL +
          '/assets/illustration/' +
          heroName +
          '.png'
        }
        alt={heroName}
        className={"illustration " + heroName}
      />
      <HeroPageContainer heroName={heroName} />
    </section>
  );
}

export default Hero;