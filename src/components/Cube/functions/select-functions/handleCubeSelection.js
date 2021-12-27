const handleCubeSelection = (index, setCubeIndex, setIsActive) => {
  let isActiveClone = [false, false, false, false, false, false];
  isActiveClone[index] = true;

  setCubeIndex(index);
  setIsActive(isActiveClone);
};

export default handleCubeSelection;
