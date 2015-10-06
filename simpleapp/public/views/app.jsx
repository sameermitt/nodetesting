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
var reactBoostrap = require('react-bootstrap');
var Link = Router.Link;

module.exports = React.createClass({
  getInitialState : function(){
      return this.props.key? {key:this.props.key}:{key:1};
      },
  handleSelected : function(key) {
    this.setState({key:key});
  },

  render: function render() {

    return (
    	<Layout {...this.props}>
      	<div id='hello'>
      	<h1>Read this part: {this.props.displayText}</h1>
        <h6>Sameer created me.</h6>

        <nav role="tablist" className="col-xs-3 collapse in">
          <ul className="nav nav-pills nav-stacked">
            <li><Link to='hello'>Welcome</Link></li>
            <li><Link to='entry'>Data Collection</Link></li>
            <li><Link to='bye'>To-da-loo</Link></li>
          </ul>
        </nav>

        <div className="tab-content col-xs-9">
          <Router.RouteHandler {...this.props}/>
        </div>

        </div>
      </Layout>
    );
  }
});
