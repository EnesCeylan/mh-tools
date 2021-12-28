import './Hero.css';
import skillData from '../../data/skillData';

function HeroList() {
  return (
    <div className='skill'>
      {skillData['Nagakanya'].skill4.description.lv1.map((piece, index) => {
        if (piece.type === 'value') {
          return (
            <span className='highlight' key={index}>
              {piece.content}
            </span>
          );
        } else if (piece.type === 'status') {
          return (
            <span className='highlight-status' key={index}>
              {piece.content}
            </span>
          );
        } else if (piece.type === 'warning') {
          return (
            <span className='highlight-warning' key={index}>
              {piece.content}
            </span>
          );
        } else if (piece.type === 'line-break') {
          return <br key={index} />;
        } else {
          return piece.content;
        }
      })}
    </div>
  );
}

export default HeroList;
