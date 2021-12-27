import handleFaceReset from './functions/reset-functions/handleFaceReset';
import handleCubeReset from './functions/reset-functions/handleCubeReset';
import handleAllReset from './functions/reset-functions/handleAllReset';

function ResetButtons({ cubeIndex, faceIndex, cube, setCube }) {
  return (
    <div className='reset-container'>
      <button
        className='btn-reset'
        onClick={() => handleFaceReset(cubeIndex, faceIndex, cube, setCube)}
      >
        Reset Face
      </button>
      <button
        className='btn-reset'
        onClick={() => handleCubeReset(cubeIndex, cube, setCube)}
      >
        Reset Cube
      </button>
      <button
        className='btn-reset'
        onClick={() => handleAllReset(cube, setCube)}
      >
        Reset All
      </button>
    </div>
  );
}

export default ResetButtons;
