import './Hero.css';
import skillData from '../../data/skillData';

function HeroList() {
  return (
    <div className='skill'>
      {skillData['Typhon'].skill2.description.lv1.map((piece, index) => {
        if (piece.type === 'value') {
          return (
            <span className='highlight' key={index}>
              {piece.content}
            </span>
          );
        } else if (piece.type === 'line-break') {
          return <br key={index} />;
        } else if (piece.type === 'text') {
          return piece.content;
        } else {
          return (
            <span className={'highlight-' + piece.type} key={index}>
              {piece.content}
            </span>
          );
        }
      })}
    </div>
  );
}

export default HeroList;
