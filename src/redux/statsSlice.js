import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {useFetch} from '../hooks/useFetch';

const initialState = {
  stats: [],
  statsLoadingStatus: 'idle',
};

export const fetchStats = createAsyncThunk(
  'stats/fetchStats',
  async ({date, language}) => {
    const {request} = useFetch();
    return await request(date, language);
  },
);

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchStats.pending, state => {
        state.statsLoadingStatus = 'loading';
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.statsLoadingStatus = 'idle';
        state.stats = action.payload.data;
      })
      .addCase(fetchStats.rejected, state => {
        state.statsLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const {reducer} = statsSlice;
export default reducer;
