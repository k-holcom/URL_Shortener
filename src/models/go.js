const db = require('./db.js');

// Find the the row
exports.findOne = (payload, err, success) => {
  db.url.find({
    where: {
      short: payload.short,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};
