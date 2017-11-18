var mongo = require('mongodb');

// variable created to eschew the execution of connection unecessary
var connMongoDb = function(){

    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    );

    return db; 

}

// exporting the function above.
module.exports = function(){
    return connMongoDb;    
}