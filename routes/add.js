var data = require("../friendsData.json");

exports.addFriend = function(request, response) {   
	// Your code goes here

	data.friends.push({
		"name": request.query.name, 
		"image": "friendo1.png",
		"id": "new friend"
	});
	console.log(data.friends);
	response.render("friends", data);
}
