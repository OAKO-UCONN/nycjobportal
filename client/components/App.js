/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from '@chakra-ui/core';
import { renderRoutes } from 'react-router-config';
import * as actions from '../actions';

import Header from './Header';

class App extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    const { route } = this.props;
    const { routes } = route;
    return (
      <ThemeProvider>
        <>
          <Header />
          <>{renderRoutes(routes)}</>
        </>
      </ThemeProvider>
    );
  }
}

const loadData = store => {
  return store.dispatch(actions.fetchUser());
};

export { loadData };

export default connect(null, actions)(App);
