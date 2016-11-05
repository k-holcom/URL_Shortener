const db = require('./db.js');

//Find the the row
exports.findOne = (payload, err, success) => {
  db.url.find({
    where: {
      short: payload.shortURL,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
}
