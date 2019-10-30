import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../series/Series';
import About from '../about/About';

const Main = props => (
    <Switch>

        <Route exact path="/" component={Series} />
        <Route path="/about/:id" component={About} />

    </Switch>
);

export default Main;