var faker = require('faker');

module.exports = function() {
	var data = {
		posts: []
	};

	// Generate Posts
	for (var i = 1; i <= 5; i++) {
		data.posts.push({
			id: i,
			title: faker.lorem.sentence(),
			body: faker.lorem.sentence()
		});
	}

	return data;
}();