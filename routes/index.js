const express = require('express');
const router = express.Router();

// routing method
router.get('/', function(req, res) {
  const pagetitle = 'working with express and ejs';
  // render from path
  res.render('pages/index', {
  	pagetitle: pagetitle
  });
});

module.exports = router;