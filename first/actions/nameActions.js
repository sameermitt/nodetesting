const NAME_UPDATED = 'NAME_UPDATED';

var updateName = function(name){
	return {
		type: NAME_UPDATED,
		newName: name
	};
};

module.exports.updateName = updateName;