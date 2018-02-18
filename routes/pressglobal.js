const express = require('express');
const router = express.Router();

router.get('/pressglobal', function(req, res) {
  const pagetitle = 'data ordered by unix timestamp in app, reformatted in view';
  // appData = press.json
  const data = req.app.get('appData');
  const headline = 'global press news';

  //let title = 'global press releases';

  let orderedByTimestamp = data.sort(function(obj1, obj2){
    return obj2.timestamp - obj1.timestamp;
  });

  res.render('pages/press', {
    pagetitle: pagetitle,
    orderedByTimestamp: orderedByTimestamp,
    headline: headline
  });

});

module.exports = router;