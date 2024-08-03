import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Stock and Crypto Prices</h1>
      <button onClick={() => dispatch(openModal())}>Change Symbol</button>
      <DataTable />
      <Modal />
    </div>
  );
};

export default Home;
