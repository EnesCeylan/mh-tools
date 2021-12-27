import './Hero.css';
import skillData from '../../data/skillData';

function HeroList() {
  return (
    <div className='skill'>
      {skillData.Lucifer.skill2.description.lv1.map((piece) => {
        if (piece.type === 'value') {
          return <span className='highlight'>{piece.content}</span>;
        } else if (piece.type === 'status') {
          return <span className='highlight-status'>{piece.content}</span>;
        } else if (piece.type === 'warning') {
          return <span className='highlight-warning'>{piece.content}</span>;
        } else if (piece.type === 'line-break') {
          return <br />;
        } else {
          return piece.content;
        }
      })}
    </div>
  );
}

export default HeroList;
