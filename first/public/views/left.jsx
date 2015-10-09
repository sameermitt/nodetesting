var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass ({
	getInitialState: function() {
		return {displayText:'Default Display Text'};
	},
	onChildUpdate : function(text) {
		this.setState({displayText:text});
	},
	render: function() {
		return(
			<div id="container" className="">
				<h1>{this.state.displayText}</h1>
				<nav role="tablist" id="leftpanel" className="col-xs-3 collapse in">
					<ul className="nav nav-pills nav-stacked">
					<li><Link to='welcome'>Welcome!</Link></li>
					<li><Link to="data">Data Collection</Link></li>
					<li><Link to='bye'>Bye!</Link></li>
					</ul>
				</nav>

				<div id="tabcontent" className="tab-content col-xs-9" >
						<Router.RouteHandler {...this.props} onChildUpdate={this.onChildUpdate}/>
				</div>
			</div>
			);
	}
});