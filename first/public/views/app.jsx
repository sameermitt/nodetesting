/*-------------------------------------------------------------------------------------------------------------------*\
|  Copyright (C) 2015 PayPal                                                                                          |
|                                                                                                                     |
|  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
|  with the License.                                                                                                  |
|                                                                                                                     |
|  You may obtain a copy of the License at                                                                            |
|                                                                                                                     |
|       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
|                                                                                                                     |
|  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
|  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
|  the specific language governing permissions and limitations under the License.                                     |
\*-------------------------------------------------------------------------------------------------------------------*/

'use strict';

var Layout = require('./layout.jsx');
var React = require('react');
var Router = require('react-router');
var redux = require('redux');
var Provider = require('react-redux').Provider;

var reducers = require('../reducers');

var store = redux.createStore(reducers);
var Left = require('./left.jsx');

module.exports = React.createClass({

  render: function render() {

    return (
      <Layout {...this.props}>
      	<Provider store={store}>
        	{() => <Router.RouteHandler {...this.props} />}
        </Provider>
      </Layout>
    );
  }
});
