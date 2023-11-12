import React from 'react'

import { Provider } from 'react-redux';
import { store } from './store.js';

import Snake from './component/Snake';

const App = () => {
    
    return (
        <Provider store={store}>
            <Snake />
        </Provider>
    )
}

export default App

