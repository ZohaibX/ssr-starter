import * as React from 'react';
// import { renderRoutes } from 'react-router-config';
// import Header from './components/header';
// import { fetchCurrentUser } from './Store/actions';

const App = ({ route }) => {
  return (
    <div>
      <h1>HELLO</h1>
      {/* <Header /> */}
      {/* {renderRoutes(route.routes)} */}
    </div>
  );
};

export default {
  component: App,
  // loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
