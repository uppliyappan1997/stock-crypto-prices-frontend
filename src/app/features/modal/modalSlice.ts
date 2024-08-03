import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  symbol: string;
}

const initialState: ModalState = {
  isOpen: false,
  symbol: 'BTC-USD',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    setSymbol(state, action: PayloadAction<string>) {
      state.symbol = action.payload;
    },
  },
});

export const { openModal, closeModal, setSymbol } = modalSlice.actions;

export default modalSlice.reducer;
