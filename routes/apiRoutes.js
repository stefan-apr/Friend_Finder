var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    friendData.push(req.body);
  });

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendData.length = [];

    res.json({ ok: true });
  });
};
