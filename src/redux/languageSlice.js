import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {deviceLanguage} from '../translate/deviceLanguage';
import {useStorage} from '../hooks/useStorage';

const initialState = {
  language: '',
  languageLoadingStatus: 'loading',
};

export const getLanguage = createAsyncThunk(
  'language/getLanguage',
  async () => {
    const defaultLanguage = deviceLanguage();
    const {getData} = useStorage();
    return await getData('language', defaultLanguage);
  },
);

const languageSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    onChangeLanguage(state, action) {
      state.language = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getLanguage.pending, state => {
        state.languageLoadingStatus = 'loading';
      })
      .addCase(getLanguage.fulfilled, (state, action) => {
        state.languageLoadingStatus = 'idle';
        state.language = action.payload;
      })
      .addCase(getLanguage.rejected, state => {
        state.languageLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const {reducer} = languageSlice;
export const {onChangeLanguage} = languageSlice.actions;
export default reducer;
