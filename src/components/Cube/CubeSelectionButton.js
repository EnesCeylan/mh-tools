import handleCubeSelection from './functions/select-functions/handleCubeSelection';

function CubeSelectionButton({
  cube,
  index,
  setCubeIndex,
  isActive,
  setIsActive,
}) {
  const handleSelectorClass = () => {
    return isActive
      ? 'cube-selector ' + cube.name.toLowerCase() + '-cube active'
      : 'cube-selector ' + cube.name.toLowerCase() + '-cube';
  };

  return (
    <button
      className={handleSelectorClass()}
      onClick={() => {
        handleCubeSelection(index, setCubeIndex, setIsActive);
      }}
    ></button>
  );
}

export default CubeSelectionButton;
