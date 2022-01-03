import React, { useState } from 'react';

import './Cube.css';

import CubeOfTruthData from '../../data/cubeData';

import CubeContainer from './CubeContainer';

import CubeSelector from './CubeSelector';

import FaceSelector from './FaceSelector';

import ResetButtons from './ResetButtons';
import CubeModal from '../Modals/CubeModal';

function CubeOfTruth({ setShowMenu }) {
  const [cube, setCube] = useState(CubeOfTruthData);
  const [cubeIndex, setCubeIndex] = useState(0);
  const [faceIndex, setFaceIndex] = useState(0);
  const [rowIndex, setRowIndex] = useState(0);
  const [cellIndex, setCellIndex] = useState(0);

  const [modal, setModal] = useState(false);
  const [disableModal, setDisableModal] = useState(false);
  const [bonus, setBonus] = useState('');

  const isWideScreen = window.innerWidth >= 950;

  return (
    <React.Fragment>
      {!isWideScreen && (
        <div className='system-container' onClick={() => setShowMenu(false)}>
          <CubeSelector setCubeIndex={setCubeIndex} />
          <CubeContainer
            cube={cube}
            setCube={setCube}
            cubeIndex={cubeIndex}
            faceIndex={faceIndex}
            setBonus={setBonus}
            setModal={setModal}
            disableModal={disableModal}
            setDisableModal={setDisableModal}
          />
          <div className='buttons-container'>
            <FaceSelector handleClick={(index) => setFaceIndex(index)} />
            <ResetButtons
              cubeIndex={cubeIndex}
              faceIndex={faceIndex}
              cube={cube}
              setCube={setCube}
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
            cubeIndex={cubeIndex}
            faceIndex={faceIndex}
            setBonus={setBonus}
            setModal={setModal}
            disableModal={disableModal}
            setDisableModal={setDisableModal}
            isWideScreen={isWideScreen}
            setRowIndex={setRowIndex}
            setCellIndex={setCellIndex}
          />
          <section className='cube-interaction-container'>
            <CubeSelector setCubeIndex={setCubeIndex} />
            <div className='cube-bonus'>
              <p>
                {
                  cube[cubeIndex].faces[faceIndex].data[rowIndex][cellIndex]
                    .bonus
                }
              </p>
            </div>
            <div className='buttons-container'>
              <FaceSelector handleClick={(index) => setFaceIndex(index)} />
              <ResetButtons
                cubeIndex={cubeIndex}
                faceIndex={faceIndex}
                cube={cube}
                setCube={setCube}
              />
            </div>
            {!disableModal && modal && (
              <CubeModal bonus={bonus} setModal={setModal} />
            )}
          </section>
        </div>
      )}
    </React.Fragment>
  );
}

export default CubeOfTruth;
