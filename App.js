import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import './src/translate/118n';

import LoadPage from './src/pages/LoadPage/LoadPage';

const App = () => {
  // console.log('render APP');
  return (
    <Provider store={store}>
      <LoadPage />
    </Provider>
  );
};

export default App;
