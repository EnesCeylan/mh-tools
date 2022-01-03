function CubeModal({ bonus, setModal }) {
  return (
    <div className='overlay' onClick={() => setModal(false)}>
      <div className='modal-content'>
        <div className='top'>
          <button className='close-modal' onClick={() => setModal(false)}>
            <i className='far fa-times-circle'></i>
          </button>
        </div>
        <div className='bonus'>
          <h3>{bonus ? bonus : 'No data for this node yet (*μ_μ)'}</h3>
        </div>
      </div>
    </div>
  );
}

export default CubeModal;
