var data = require("../friendsData.json");
/*
 * GET home page.
 */

exports.view = function(req, res){
    res.render('friends', data);
  };