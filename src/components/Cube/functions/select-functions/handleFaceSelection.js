const handleFaceSelection = (index, setIsActiveFace) => {
  let isActiveClone = [false, false, false, false, false, false];
  isActiveClone[index] = true;

  setIsActiveFace(isActiveClone);
};

export default handleFaceSelection;
