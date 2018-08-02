import React, { Component } from 'react';
import PropTypes from 'prop-types';
import translations from '../../static/locales/translations.json';

class I18n extends Component {
  shouldComponentUpdate() {
    // Specify when to update
    return (this.props.update === '1');
  }

  static getLabel(code) {
    // eslint-disable-next-line
    let labels = translations[__CONFIGURATION__.lang];

    if (!labels) { labels = translations.en; }

    return labels[code];
  }

  render() {
    const label = I18n.getLabel(this.props.code);

    if (label) {
      return label;
    }
    return (
      <span className="red-text">!! Invalid Key ( {this.props.code} ) !!</span>
    );
  }
}

I18n.propTypes = {
  code: PropTypes.string.isRequired,
  update: PropTypes.string,
};

I18n.defaultProps = {
  update: '0',
};

export default I18n;
