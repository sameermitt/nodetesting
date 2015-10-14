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

var React = require('react');
var Router = require('react-router');

var App = require('../public/views/app.jsx');
var Left = require('../public/views/left.jsx');
var Welcome = require('../public/views/welcome.jsx');
var DataCollection = require('../public/views/datacollection.jsx');
var Bye = require('../public/views/bye.jsx');

var routes = module.exports = (
    <Router.Route path='/' handler={App}>
    	<Router.Route path='/left' handler={Left}>
    		<Router.Route name='welcome' path='welcome' handler={Welcome} />
    		<Router.Route name='data' path='data' handler={DataCollection} />
    		<Router.Route name='bye' path='bye' handler={Bye} />
    	</Router.Route>
    </Router.Route>
);