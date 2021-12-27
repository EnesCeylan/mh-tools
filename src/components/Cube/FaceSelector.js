import { useState } from 'react';
import handleFaceSelection from './functions/select-functions/handleFaceSelection';

function FaceSelector({ handleClick }) {
  const [activeFace, setActiveFace] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleSelectorClass = (face) => {
    return face ? 'face-selector active' : 'face-selector ';
  };

  return (
    <div className='face-selector-container'>
      {activeFace.map((face, index) => {
        return (
          <button
            className={handleSelectorClass(face)}
            onClick={() => {
              handleClick(index);
              handleFaceSelection(index, setActiveFace);
            }}
            key={index}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}

export default FaceSelector;
