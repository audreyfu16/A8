
/*
 * GET home page.
 */

exports.view = function(req, res){
    res.render('friends', {
      'friends': [
        { 'name': 'Audrey Fu',
          'image': 'friendo1.png',
          'id': 'Audrey'
        },
        { 'name': 'Mandy Lee',
          'image': 'friendo2.png',
          'id': 'Mandy'
        },
        { 'name': 'Avery Hom',
        'image': 'friendo3.png',
        'id': 'Avery'
        }
      ]  
    });
  };