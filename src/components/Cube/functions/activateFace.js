const activateFace = (face, setCube) => {
  if (face[0][3].state === 'semi-active' || face[0][3].state === 'active') {
    const deepCopy = JSON.parse(JSON.stringify(face));
    deepCopy.forEach((row) => {
      row.forEach((cell) => {
        cell.state = 'active';
      });
    });

    setCube(deepCopy);
  }
};

export default activateFace;
