import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loader from '../../static/img/loader.svg';


class Loader extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <img src={loader} className="loader" alt="Loading..." />
      );
    }
    return null;
  }
}

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;
