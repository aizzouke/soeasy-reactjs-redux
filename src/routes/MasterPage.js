import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/master/Header';
import Nav from '../components/master/Nav';
import Footer from '../components/master/Footer';

class MasterPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="wrapper">
        <Header />
        <div id="main">
          <Nav />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  appStore: store.appStore,
});

export default connect(mapStateToProps)(MasterPage);
