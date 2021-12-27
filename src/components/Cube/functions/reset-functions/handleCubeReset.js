import CubeOfTruthData from '../../../../data/cubeData';

const handleCubeReset = (cubeIndex, cube, setCube) => {
  const cubeClone = JSON.parse(JSON.stringify(cube));
  cubeClone[cubeIndex] = CubeOfTruthData[cubeIndex];

  setCube(cubeClone);
};

export default handleCubeReset;
