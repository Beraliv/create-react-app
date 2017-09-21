import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Root from '../components';
import * as Actions from '../actions';

const RootContainer = () => (
  <Root/>
);

RootContainer.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);