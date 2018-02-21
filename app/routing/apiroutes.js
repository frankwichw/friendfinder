var friends = require("../data/friends.js");

module.exports = function(app){
    // get route to display the friends array as a json object on the url /api/friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        //req.body is the newFriend object sent by the user, body-parser allows us to grab it like that
        var newFriend = req.body;
    
        friends.push(newFriend);

        // console.log(Math.abs(arrayOneSum - arrayTwoSum));
        
        // logic to get best match
        // initialize variable to hold the sum of the user's score
        var userScoresSum = 0;
        // looping through user's scores to add to the userscoressum variable
        for (var i = 0; i < newFriend.scores.length; i++){
            userScoresSum += parseInt(newFriend.scores[i]);
        }

        // array to hold the sums of user's scores minus the scores of each stored friend
        var sumsArray = [];

        // for loop to loop through the array of friends (minus one to account for the user's newly pushed object)
        for (var i = 0; i < friends.length -1; i++){
            // creating sum variable
            var friendScoresSum = 0;
            // nested for loop to loop through the scores of each friend and add them to the friendscoressum variable
            for (var j = 0; j < 10; j++){
                friendScoresSum += parseInt(friends[i].scores[j]);
            }
            // pushing the absolute value of the user's sum minus the friend's sum to the sums array
            sumsArray.push(Math.abs(userScoresSum - friendScoresSum));
        }
        // getting the lowest number from the array
        var lowestArrayNum = Math.min.apply(null, sumsArray);
        // getting the index of the lowest number 
        var friendIndex = parseInt(sumsArray.indexOf(lowestArrayNum));
        // getting the name and photo of the user's friend match in variables
        var friendMatchName = friends[friendIndex].name;
        var friendMatchPhoto = friends[friendIndex].photo;
        // creating object to send back
        var friendMatchObject = {
            "name": friendMatchName,
            "photo": friendMatchPhoto
        };
        // sending object back to user
        res.json(friendMatchObject);
    });
};