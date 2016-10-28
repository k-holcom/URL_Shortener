//Bringing in the Database and allows acces to the URL table.
const db = require('./db.js');

//Adding a URL
exports.add = (payload, err, success) => {
  db.url.create(payload).then(success).catch(err);
}

//Finding all URLS
exports.find = (err, success) => {
  db.url.findAll().then(success).catch(err);
}

//Finding ONE URL
exports.one = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },

    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
}

//Updating a URL
exports.update = (payload, err, success) => {
	db.url.find({
		//Find Specific App
		where: {
			id: payload.id,
		}
	//Then update actual App
	}).then((existingrow) => {
		existingrow.updateAttributes(payload).then(success).catch(err);
	}).catch(err);
}

//Deleting a URL
exports.remove = (payload, err, success) => {
	db.url.destroy({
		//Find Specific App
		where: {
			id: payload.id,
		},
	}).then(success).catch(err);
}
