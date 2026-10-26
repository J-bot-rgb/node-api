import express from "express";
const APP = express();

APP.get("/api/users", function(req, res) {
    res.send(["Prerna" , "Yash" , "Shreyash"]);

});

APP.post("/api/users/add", function(req, res) {
    res.send({"msg" : "user Added in DB"});

});

APP.get("/api/users/update", function(req, res) {
    res.send({msg: "User Updated from DB " });

});

APP.delete("/api/users/delete", function(req, res) {
    res.send({msg: "User Deletd from DB"});

});

APP.listen(4002, function () {
    console.log("Application Started");
});
