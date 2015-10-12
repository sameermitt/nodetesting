var React = require('react');
var Router = require('react-router');
var connect = require('react-redux').connect;
var Link = Router.Link;

var actions = require('../actions');

/*
---- Keeping code in case of error later :D
	getInitialState: function() {
		return {displayText:'Default Display Text'};
	},
	onChildUpdate : function(text) {
		this.setState({displayText:text});
	},

*/


var Left = React.createClass ({
	onChildUpdate: function(text){
		this.props.dispatch(actions.updateName(text));
	},	
	render: function() {
		return(
			<div id="container" className="">
				<h1>{this.props.displayText}</h1>
				<nav role="tablist" id="leftpanel" className="col-xs-3 collapse in">
					<ul className="nav nav-pills nav-stacked">
					<li><Link to='welcome'>Welcome!</Link></li>
					<li><Link to="data">Data Collection</Link></li>
					<li><Link to='bye'>Bye!</Link></li>
					</ul>
				</nav>

				<div id="tabcontent" className="tab-content col-xs-9" >
						<Router.RouteHandler {...this.props} onChildUpdate = {this.onChildUpdate}/>
				</div>
			</div>
			);
	}
});

var select = function(state) {
	return {
		displayText: state.name
	};
}

module.exports = connect(select)(Left);