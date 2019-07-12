const people = require('./../controllers/people');

module.exports = function(app) {

    // Display all people born in 1955
    app.get('/', function(req, res){
        people.index(req, res);
    })

    // Adds a name into the database
    app.get('/new/:url_name/', function(req, res) {
        people.add(req, res);
    })

    // Delete a name from the database
    app.get('/remove/:url_name/', function(req, res) {
        people.remove(req, res);
    })

    // Details on that specific person
    app.get('/:url_name', function(req, res) {
        people.details(req, res);
    })
}
