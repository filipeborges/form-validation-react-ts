import React from 'react';
import { Provider } from 'react-redux';

import Form from './components/Form'

import { store } from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
