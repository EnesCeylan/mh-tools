import CubeItem from './CubeItem';
import activateAdjacentCells from './functions/cell-functions/activateAdjacentCells';

function CubeContainer({
  cube,
  setCube,
  cubeIndex,
  faceIndex,
  setBonus,
  setModal,
}) {
  const handleCellClick = (id, row) => {
    const cubeClone = JSON.parse(JSON.stringify(cube));

    const item = cubeClone[cubeIndex].faces[faceIndex].data[row].find(
      (item) => item.id === id
    );

    item.state = 'active';

    cubeClone[cubeIndex].faces[faceIndex].data = activateAdjacentCells(
      id,
      row,
      cubeClone[cubeIndex].faces[faceIndex].data,
      item
    );

    setCube(cubeClone);
  };

  return (
    <div id='cube-container'>
      {cube[cubeIndex].faces[faceIndex].data.map((row) => {
        return row.map((item) => {
          return (
            <CubeItem
              item={item}
              handleClick={handleCellClick}
              key={item.id}
              setBonus={setBonus}
              setModal={setModal}
            />
          );
        });
      })}
    </div>
  );
}

export default CubeContainer;
