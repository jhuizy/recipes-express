var express = require('express');
var router = express.Router();

/* GET all recipes */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express3' });
});

router.get('/:id', function(req, res, next) {
  res.send({a: 'b'});
})

module.exports = router;
