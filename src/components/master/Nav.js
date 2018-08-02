import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Step1 from '../../routes/FirstPage';
import Step2 from '../../routes/SecondPage';

export default class Nav extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/step1" component={Step1} />
        <Route exact path="/step2" component={Step2} />
        <Route exact path="/" component={Step1} />
      </Switch>
    );
  }
}

