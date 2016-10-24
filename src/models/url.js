const db = require('./db')

// Create a URL
exports.add = (payload, err, success) => {
  db.API.create(payload).then(success).catch(err);
}

//Find All URL
exports.find = (err, success) = {
  db.API.findAll().then(success).catch(err);
}

//Find One URL
exports.one = (payload, err, success) => {
  //Find specific row
  db.API.find({
    where: {
      id: payload.id,
    },

    //Finds all rows that are related
    include: [{
      all:true,
      nested: true,
    }],
  }).then(success).catch(err);
}

//Update the URL
exports.update =(payload, err, success) => {
  db.API.find({
    //Find specific URL
    where: {
      id: payload.id,
    }
    //Then updates the URL
  }).then((existingrow) => {
    existingrow.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
}

//Delete URL
exports.remove = (payload, err, success) => {
  db.API.destroy({}).then(success).catch(err);
}
