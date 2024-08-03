import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import axios from 'axios';

interface DataState {
  entries: Array<any>;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  entries: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
    },
    fetchDataSuccess(state, action: PayloadAction<any[]>) {
      state.entries = action.payload;
      state.loading = false;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export const fetchData = (symbol: string): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchDataStart());
    const response = await axios.get(`/api/data?symbol=${symbol}`);
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.toString()));
  }
};

export default dataSlice.reducer;
