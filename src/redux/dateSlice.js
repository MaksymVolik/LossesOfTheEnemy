import {createSlice} from '@reduxjs/toolkit';
const initialState = {value: new Date().toISOString().split('T')[0]};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    onChangeDate(state, action) {
      state.value = action.payload;
    },
  },
});

export const {onChangeDate} = dateSlice.actions;

export default dateSlice.reducer;
