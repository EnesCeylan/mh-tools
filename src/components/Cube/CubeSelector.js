import { useState } from 'react';
import CubeOfTruthData from '../../data/cubeData';
import CubeSelectionButton from './CubeSelectionButton';

function CubeSelector({ setCubeIndex }) {
  const [isActive, setIsActive] = useState([true, false, false, false, false]);

  return (
    <div className='cube-selector-container'>
      {CubeOfTruthData.map((cube, index) => {
        return (
          <CubeSelectionButton
            cube={cube}
            index={index}
            setCubeIndex={setCubeIndex}
            key={index}
            isActive={isActive[index]}
            setIsActive={setIsActive}
          />
        );
      })}
    </div>
  );
}

export default CubeSelector;
