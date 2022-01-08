import handleFaceReset from './functions/handleFaceReset';
import activateFace from './functions/activateFace';

function CubeControls({
  cubeIndex,
  faceIndex,
  cube,
  setCube,
  disableModal,
  setDisableModal,
  isWideScreen,
}) {
  return (
    <div className='reset-container'>
      <button
        className='btn-reset'
        onClick={() => handleFaceReset(cubeIndex, faceIndex, cube, setCube)}
      >
        Reset Face
      </button>
      <button className='btn-reset' onClick={() => activateFace(cube, setCube)}>
        Activate Face
      </button>
      {!isWideScreen && (
        <button
          className={disableModal ? 'btn-reset active' : 'btn-reset'}
          onClick={() => setDisableModal(!disableModal)}
        >
          {disableModal ? 'Acivate pop-up' : 'Disable pop-up'}
        </button>
      )}
    </div>
  );
}

export default CubeControls;
