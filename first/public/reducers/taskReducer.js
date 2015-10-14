var inputString = "{\r\n   \"entityType\":\"person_party\",\r\n   \"tasks\":[\r\n      {\r\n         \"name\":\"third_party_silent_verification\",\r\n         \"links\":\"[]\",\r\n         \"returnUrl\":\"\/policy\/hub\",\r\n         \"level\":\"CIP\",\r\n         \"country\":\"BR\",\r\n         \"entityType\":\"person_party\",\r\n         \"entityId\":\"1487020175669351731\",\r\n         \"status\":\"hidden\"\r\n      },\r\n      {\r\n         \"name\":\"third_party_online_verification\",\r\n         \"links\":\"[{\\\"href\\\":\\\"\/v1\/compliance\/criteria-decisions\/Pd5SulNcRwYVf9eDt3AN5ZiBerUdV0dNMiotuMEJwgGT5qgqnfgaXiko60g1XnlJ\/arbitrate\\\",\\\"rel\\\":\\\"decision\\\",\\\"method\\\":\\\"POST\\\",\\\"encType\\\":\\\"application\/json\\\"}]\",\r\n         \"href\":\"\/policy\/datacollection\",\r\n         \"actionMethod\":\"POST\",\r\n         \"returnUrl\":\"\/policy\/hub\",\r\n         \"level\":\"CIP\",\r\n         \"country\":\"BR\",\r\n         \"entityType\":\"person_party\",\r\n         \"entityId\":\"1487020175669351731\",\r\n         \"status\":\"in_progress\"\r\n      },\r\n      {\r\n         \"name\":\"tax_id_document_collection\",\r\n         \"links\":\"[{\\\"href\\\":\\\"\/v1\/compliance\/criteria-decisions\/Pd5SulNcRwYVf9eDt3AN5ZiBerUdV0dNMiotuMEJwgEQhKmzuUjXvJTvTOEwPefG\/arbitrate\\\",\\\"rel\\\":\\\"decision\\\",\\\"method\\\":\\\"POST\\\",\\\"encType\\\":\\\"application\/json\\\"}]\",\r\n         \"href\":\"\/policy\/datacollection\",\r\n         \"actionMethod\":\"POST\",\r\n         \"returnUrl\":\"\/policy\/hub\",\r\n         \"level\":\"CIP\",\r\n         \"country\":\"BR\",\r\n         \"entityType\":\"person_party\",\r\n         \"entityId\":\"1487020175669351731\",\r\n         \"status\":\"hidden\"\r\n      },\r\n      {\r\n         \"name\":\"individual_information_online_verification\",\r\n         \"links\":\"[{\\\"href\\\":\\\"\/v1\/compliance\/criteria-decisions\/Pd5SulNcRwYVf9eDt3AN5ZiBerUdV0dNMiotuMEJwgGT5qgqnfgaXiko60g1XnlJ\/arbitrate\\\",\\\"rel\\\":\\\"decision\\\",\\\"method\\\":\\\"POST\\\",\\\"encType\\\":\\\"application\/json\\\"}]\",\r\n         \"href\":\"\/policy\/datacollection\",\r\n         \"actionMethod\":\"POST\",\r\n         \"returnUrl\":\"\/policy\/hub\",\r\n         \"level\":\"KYC\",\r\n         \"country\":\"BR\",\r\n         \"entityType\":\"person_party\",\r\n         \"entityId\":\"1487020175669351731\",\r\n         \"status\":\"start\"\r\n      }\r\n   ]\r\n}";
var read = JSON.parse(inputString);

// console.log(read);

var names = read.tasks.map(function(task){
	return task.name;
});

// console.log(names);

var taskReducer = module.exports = function(state, action) {
	if(!state) return read;
	switch(action.type){
		default: return read;
	}
};