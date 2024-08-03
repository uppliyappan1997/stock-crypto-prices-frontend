import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { closeModal, setSymbol } from '../features/modal/modalSlice';
import { fetchData } from '../features/data/dataSlice';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, symbol } = useSelector((state: RootState) => state.modal);
  const [inputSymbol, setInputSymbol] = useState(symbol);

  const handleSubmit = () => {
    dispatch(setSymbol(inputSymbol));
    dispatch(fetchData(inputSymbol));
    dispatch(closeModal());
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Change Stock or Crypto</h2>
        <input
          type="text"
          value={inputSymbol}
          onChange={(e) => setInputSymbol(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => dispatch(closeModal())}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
