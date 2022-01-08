import CubeOfTruthData from '../../../data/cubeData';

const handleFaceReset = (cubeIndex, faceIndex, cube, setCube) => {
  let cubeClone = JSON.parse(JSON.stringify(cube));
  cubeClone = CubeOfTruthData[cubeIndex].faces[faceIndex].data;

  setCube(cubeClone);
};

export default handleFaceReset;
