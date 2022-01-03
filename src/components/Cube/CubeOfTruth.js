import React, { useState, useEffect } from 'react';

import './Cube.css';

import CubeOfTruthData from '../../data/cubeData';

import CubeContainer from './CubeContainer';

import CubeSelector from './CubeSelector';

import FaceSelector from './FaceSelector';

import CubeControls from './CubeControls';
import CubeModal from '../Modals/CubeModal';

function NonSeparatedCube({ setShowMenu }) {
  const [cubeIndex, setCubeIndex] = useState(0);
  const [faceIndex, setFaceIndex] = useState(0);
  const [cube, setCube] = useState(
    CubeOfTruthData[cubeIndex].faces[faceIndex].data
  );
  const [rowIndex, setRowIndex] = useState(0);
  const [cellIndex, setCellIndex] = useState(0);

  const [modal, setModal] = useState(false);
  const [disableModal, setDisableModal] = useState(false);
  const [bonus, setBonus] = useState('Hero Health +640');

  const isWideScreen = window.innerWidth >= 950;

  useEffect(() => {
    setCube(CubeOfTruthData[cubeIndex].faces[faceIndex].data);
    setBonus(CubeOfTruthData[cubeIndex].faces[faceIndex].data[0][3].bonus);
  }, [cubeIndex, faceIndex]);

  return (
    <React.Fragment>
      {!isWideScreen && (
        <div className='system-container' onClick={() => setShowMenu(false)}>
          <CubeSelector setCubeIndex={setCubeIndex} />
          <CubeContainer
            cube={cube}
            setCube={setCube}
            setBonus={setBonus}
            setModal={setModal}
          />
          <div className='buttons-container'>
            <FaceSelector handleClick={(index) => setFaceIndex(index)} />
            <CubeControls
              cubeIndex={cubeIndex}
              faceIndex={faceIndex}
              cube={cube}
              setCube={setCube}
              disableModal={disableModal}
              setDisableModal={setDisableModal}
              isWideScreen={isWideScreen}
            />
          </div>
          {!disableModal && modal && (
            <CubeModal bonus={bonus} setModal={setModal} />
          )}
        </div>
      )}
      {isWideScreen && (
        <div className='system-container' onClick={() => setShowMenu(false)}>
          <CubeContainer
            cube={cube}
            setCube={setCube}
            setBonus={setBonus}
            setModal={setModal}
            isWideScreen={isWideScreen}
            setRowIndex={setRowIndex}
            setCellIndex={setCellIndex}
          />
          <section className='cube-interaction-container'>
            <CubeSelector setCubeIndex={setCubeIndex} />
            <div className='cube-bonus'>
              <p>{bonus}</p>
            </div>
            <div className='buttons-container'>
              <FaceSelector handleClick={(index) => setFaceIndex(index)} />
              <CubeControls
                cubeIndex={cubeIndex}
                faceIndex={faceIndex}
                cube={cube}
                setCube={setCube}
                disableModal={disableModal}
                setDisableModal={setDisableModal}
                isWideScreen={isWideScreen}
              />
            </div>
          </section>
        </div>
      )}
    </React.Fragment>
  );
}

export default NonSeparatedCube;
