var data = require("../flowerData.json");


exports.view = function(req, res){
    res.render('flowerpedia', 
    	data
    )
  };