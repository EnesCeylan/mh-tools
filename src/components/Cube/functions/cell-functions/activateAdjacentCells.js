import changeAdjacentCellState from './changeAdjacentCellState';

const activateAdjacentCells = (id, row, faceData, item) => {
  const cellModulus = id % 16;
  if (
    cellModulus !== 3 &&
    cellModulus !== 7 &&
    cellModulus !== 11 &&
    cellModulus !== 15
  ) {
    faceData = changeAdjacentCellState(id + 1, row, faceData, item);
  }

  if (
    cellModulus !== 0 &&
    cellModulus !== 4 &&
    cellModulus !== 8 &&
    cellModulus !== 12
  ) {
    faceData = changeAdjacentCellState(id - 1, row, faceData, item);
  }

  if (
    cellModulus !== 0 &&
    cellModulus !== 1 &&
    cellModulus !== 2 &&
    cellModulus !== 3
  ) {
    faceData = changeAdjacentCellState(id - 4, row - 1, faceData, item);
  }

  if (
    cellModulus !== 12 &&
    cellModulus !== 13 &&
    cellModulus !== 14 &&
    cellModulus !== 15
  ) {
    faceData = changeAdjacentCellState(id + 4, row + 1, faceData, item);
  }

  return faceData;
};

export default activateAdjacentCells;
