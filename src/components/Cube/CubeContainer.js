import CubeItem from './CubeItem';
import activateAdjacentCells from './functions/cell-functions/activateAdjacentCells';

function CubeContainer({
  cube,
  setCube,
  setBonus,
  setModal,
  isWideScreen,
  setRowIndex,
  setCellIndex,
}) {
  const handleCellClick = (id, row) => {
    let cubeClone = JSON.parse(JSON.stringify(cube));

    const item = cubeClone[row].find((item) => item.id === id);

    item.state = 'active';

    cubeClone = activateAdjacentCells(id, row, cubeClone, item);

    setCube(cubeClone);
    if (isWideScreen) {
      setRowIndex(row);
      setCellIndex(id % 4);
    }
  };

  return (
    <section className='cube-wrapper'>
      <div id='cube-container'>
        {cube.map((row) => {
          return row.map((item) => {
            return (
              <CubeItem
                item={item}
                handleClick={handleCellClick}
                key={item.id}
                setBonus={setBonus}
                setModal={setModal}
                isWideScreen={isWideScreen}
              />
            );
          });
        })}
      </div>
    </section>
  );
}

export default CubeContainer;
