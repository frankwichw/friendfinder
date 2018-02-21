var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        //req.body is the newFriend object sent by the user, body-parser allows us to grab it like that
        var newFriend = req.body;

        //newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newFriend);
    
        friends.push(newFriend);
    
        res.json(newFriend);
        
        // creating logic to find the nearest match
        
    });
};