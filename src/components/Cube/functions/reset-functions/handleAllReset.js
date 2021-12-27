import CubeOfTruthData from '../../../../data/cubeData';

const handleAllReset = (cube, setCube) => {
  const cubeClone = JSON.parse(JSON.stringify(CubeOfTruthData));

  setCube(cubeClone);
};

export default handleAllReset;
