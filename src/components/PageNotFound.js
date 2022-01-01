import '../App.css';

function PageNotFound({ setShowMenu }) {
  return (
    <div className='error-page' onClick={() => setShowMenu(false)}>
      Error! Page not found.
    </div>
  );
}

export default PageNotFound;
