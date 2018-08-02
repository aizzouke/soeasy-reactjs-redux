import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClearFixSpace from '../components/common/ClearFixSpace';
import Error from '../components/common/Error';
import Loader from '../components/common/Loader';
import { getUsers } from '../actions/HttpActions';
import T from '../components/common/I18n';

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: {
        isRaiseError: false,
        message: '',
        isInfo: false,
      },
    };
  }

  getUsers() {
    this.setState({ isLoading: true });
    this.props.getUsers('your-jwt-token').then(
      () => {
        this.props.history.replace('/step2');
      },
      () => {
        this.setState({ isLoading: false, error: this.props.appStore.error });
      },
    );
  }

  raiseHideError(isInfo) {
    const error = {
      isRaiseError: true,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isInfo,
    };
    this.setState({ error });
  }

  hideError() {
    const error = {
      isRaiseError: false,
      message: '',
      isInfo: false,
    };
    this.setState({ error });
  }


  showHideLoader() {
    this.setState({ isLoading: !this.state.isLoading });
  }

  render() {
    return (
      <div id="first-page" className="fade-in">
        <T code="lbl.description" />
        <ClearFixSpace />
        <T code="lbl.more.details" />
        <br />
        <a href="https://jsonplaceholder.typicode.com">https://jsonplaceholder.typicode.com/</a>
        <ClearFixSpace />
        <button className="action-btn primary" onClick={this.getUsers.bind(this)}>
          <T code="btn.get.users" />
        </button>
        <ClearFixSpace />
        <hr />
        <div className="title">
          <T code="lbl.widgets" />
        </div>

        <button className="action-btn large " onClick={this.raiseHideError.bind(this, false)}>
          <T code="btn.raise.warning" />
        </button>

        <button className="action-btn large " onClick={this.raiseHideError.bind(this, true)}>
          <T code="btn.raise.information" />
        </button>

        <Loader isLoading={this.state.isLoading} />
        <Error error={this.state.error} hide={this.hideError.bind(this)} />

      </div>
    );
  }
}

FirstPage.propTypes = {
  getUsers: PropTypes.func.isRequired,
  appStore: PropTypes.object.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = store => ({
  appStore: store.appStore,
});
export default connect(mapStateToProps, { getUsers })(FirstPage);
