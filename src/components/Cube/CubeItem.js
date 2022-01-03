function CubeItem({ item, handleClick, setBonus, setModal, isWideScreen }) {
  const handleBgClass = (cellData) => {
    if (cellData.state === 'inactive') {
      return cellData.bg + '-inactive';
    } else if (cellData.state === 'semi-active') {
      return cellData.bg + '-semi-active';
    } else {
      return cellData.bg;
    }
  };

  return (
    <button
      className={`cell-item ${handleBgClass(item)}`}
      disabled={item.state === 'inactive' ? true : false}
      onClick={() => {
        handleClick(item.id, item.row);
        setBonus(item.bonus);
        setModal(!isWideScreen);
      }}
    />
  );
}

export default CubeItem;
