import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import T from '../components/common/I18n';

class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    this.setState({ users: this.props.appStore.users });
  }

  previousStepClick() {
    this.props.history.replace('/step1');
  }

  usersRender() {
    if (this.state.users && this.state.users.length === 0) {
      return (
        <div className="empty-list">
          <T code="err.no.user.found" />
        </div>);
    }
    const users = [];

    this.state.users.forEach((user, index) => {
      if (index < 3) {
        const style = index % 2 === 0 ? 'user-box' : 'user-box orange-box';
        const elem = (
          <div className={style} key={user.id}>
            <span className="id-badge">
              {user.id}
            </span>
            <span>
              {`${user.name} (${user.username})`}
            </span><br />
            <span>
              {user.email}
            </span><br />
            <span>
              {`${user.address.street}, ${user.address.zipcode}, ${user.address.city}`}
            </span>
          </div>);
        users.push(elem);
      }
    });

    return users;
  }

  render() {
    return (
      <div id="second-page" className="fade-in">
        <span className="title">
          <T code="lbl.users.list" />
        </span>
        <hr />
        {this.usersRender()}
        <hr />
        <button className="action-btn primary" onClick={this.previousStepClick.bind(this)}>
          <T code="btn.back" />
        </button>
      </div>
    );
  }
}


SecondPage.propTypes = {
  appStore: PropTypes.object.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = store => ({
  appStore: store.appStore,
});

export default connect(mapStateToProps, null)(SecondPage);
