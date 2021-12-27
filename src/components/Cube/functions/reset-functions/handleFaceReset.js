import CubeOfTruthData from '../../../../data/cubeData';

const handleFaceReset = (cubeIndex, faceIndex, cube, setCube) => {
  const cubeClone = JSON.parse(JSON.stringify(cube));
  cubeClone[cubeIndex].faces[faceIndex] =
    CubeOfTruthData[cubeIndex].faces[faceIndex];

  setCube(cubeClone);
};

export default handleFaceReset;
