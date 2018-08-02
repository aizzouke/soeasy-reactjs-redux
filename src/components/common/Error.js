import React, { Component } from 'react';
import PropTypes from 'prop-types';
import T from './I18n';

class Error extends Component {
  render() {
    if (this.props.error.isRaiseError) {
      const errorType = this.props.error.isInfo ? 'btn.raise.information' : 'btn.raise.warning';
      const titleStyle = this.props.error.isInfo ? 'error-title error-title-info' : 'error-title error-title-warn';
      const messageStyle = this.props.error.isInfo ? 'error-message error-message-info' : 'error-message error-message-warn';

      return (
        <div className="error-bloc fade-in">
          <div className={titleStyle}>
            <T code={errorType} update="1" />
            <span className="close-error" onClick={this.props.hide} role="presentation">X</span>
          </div>
          <div className={messageStyle}>
            {this.props.error.message}
          </div>
        </div>
      );
    }
    return null;
  }
}

Error.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
    isInfo: PropTypes.bool,
    isRaiseError: PropTypes.bool,
  }),
  hide: PropTypes.func,
};

Error.defaultProps = {
  error: { isRaiseError: false },
  hide: null,
};

export default Error;
