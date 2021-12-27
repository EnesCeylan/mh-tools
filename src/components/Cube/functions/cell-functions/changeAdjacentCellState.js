const changeAdjacentCellState = (id, row, faceData, item) => {
  const adjacentItem = faceData[row].find((item) => item.id === id);
  if (adjacentItem.state === 'inactive') {
    adjacentItem.state = 'semi-active';
  } else {
    if (adjacentItem.state === 'semi-active' && item.state === 'inactive') {
      adjacentItem.state = 'inactive';
    }
  }

  return faceData;
};

export default changeAdjacentCellState;
