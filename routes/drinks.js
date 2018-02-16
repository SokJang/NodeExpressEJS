const express = require('express');
const router = express.Router();

router.get('/drinks', function(req, res) {
  
  const pagetitle = 'transfering data to template view';
  
  const drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 }
  ];
  
  res.render('pages/drinks', {
    pagetitle: pagetitle,
    drinks: drinks
  });

});

module.exports = router;