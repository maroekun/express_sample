
exports.regist = function(req, res) {
  console.log(' request : get /user/regist ');

  res.render( 'user/regist', { title: 'user/regist' } );
};

exports.regist_post = function(req, res) {
  console.log( ' request : post /user/regist' );
  console.log( req.body );
  req.assert( ['user', 'name'], 'Invalid name' ).notEmpty();

  var errors = req.validationErrors();
  console.log(errors);
  if (errors) {
    console.log( 'has errors' );
  };

  res.render( 'user/regist', { title: 'user/regist' } );
};

//exports.regist_put = function(req, res) {
//  console.log( ' request : put /user/regist' );
//  console.log( req.body );
//  res.redirect( 'back' );
//};
