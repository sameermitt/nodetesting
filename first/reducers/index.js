var redux = require('redux');
var nameReducer = require('./nameReducer');

var rootReducer = redux.combineReducers({
	name: nameReducer
});

module.exports = rootReducer;