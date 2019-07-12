const mongoose = require('mongoose'), 
People = mongoose.model('People')

module.exports = {
    index: function(req, res) {
        console.log('in index');
        People.find({}, function(err, people){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({message: "Success", data: people})
            }
         })
    },

    add: function(req, res) {
        var person = new People ({name: req.params.url_name});
        person.save(function(err) {
            if(err) {
                console.log('could not add person');                
            }
            else {
                console.log('person added');
            }
        })
    },

    remove: function(req, res) {
        People.remove({name: req.params.url_name}, function(err) {
            if(err) {
                console.log('could not delete');
            }
            else {
                console.log('deleted');
            }
        })
    },

    details: function(req, res) {
        People.find({name: req.params.url_name}, function(err, person) {
            if(err) {
                console.log('couldnt find the person');
            }
            else {
                console.log('found!');
                res.json({person: person});
            }
        })
    },
}

