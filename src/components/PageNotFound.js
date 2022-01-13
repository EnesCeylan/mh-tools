import '../App.css';

function PageNotFound({ setShowMenu }) {
  return (
    <div className='error-page' onClick={() => setShowMenu(false)}>
      <img className='error-page-img' src={process.env.PUBLIC_URL + '/assets/Hecate404.png'} alt='Hecate looking sad' />
    </div>
  );
}

export default PageNotFound;
