var actions = require('../actions');

var updateName = function(name, action) {
	console.log("SMITTAL reducer called");
	if(!name) name = 'Your name will go here.';
	switch(action.type) {
		case actions.NAME_UPDATED: return action.newName;
		default: return name;
	}
};

module.exports = updateName;