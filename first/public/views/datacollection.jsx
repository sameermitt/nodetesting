var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
	getInitialState: function(){
		return {textValue:'Default Text Field Value'};
	},
	handleValueChange: function(event){
		this.props.onChildUpdate(event.target.value);
		this.setState({textValue:event.target.value});
	},
	render: function() {
		return(
			<div id="datacollection" classname="">
				<h1>Data Collection</h1>
				<h5>This is the data collection page.</h5>
				<input type="text" value={this.state.textValue} onChange={this.handleValueChange}/>
			</div>
			);
	}
});