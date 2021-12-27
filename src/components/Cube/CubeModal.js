function CubeModal({ bonus, setModal }) {
  return (
    <div className='overlay' onClick={() => setModal(false)}>
      <div className='modal-content'>
        <h2>{bonus ? bonus : 'No data for this node yet (*μ_μ)'}</h2>
        <button className='close-modal' onClick={() => setModal(false)}>
          X
        </button>
      </div>
    </div>
  );
}

export default CubeModal;
