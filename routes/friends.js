
/*
 * GET home page.
 */

exports.view = function(req, res){
    res.render('friends', {
      'friendo': [
        { 'name': 'Audrey Fu',
          'image': 'hilichurl.jpg',
          'id': 'Audrey'
        },
        { 'name': 'Mandy Lee',
          'image': 'hilichurl.jpg',
          'id': 'Mandy'
        }
      ]  
    });
  };