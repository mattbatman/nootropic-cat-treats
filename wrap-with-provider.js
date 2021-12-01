import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/global-state/createStore';

// see gatsby redux example repo 
// https://github.com/gatsbyjs/gatsby/blob/master/examples/using-redux/wrap-with-provider.js
export default ({ element }) => {
	const store = createStore()
	return <Provider store={store}>{element}</Provider>
};