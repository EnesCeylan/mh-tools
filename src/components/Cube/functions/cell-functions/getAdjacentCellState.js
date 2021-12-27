const getAdjacentCellState = (id, row, faceData) => {
  const adjacentItem = faceData[row].find((item) => item.id === id);
  return adjacentItem.state;
};

export default getAdjacentCellState;
