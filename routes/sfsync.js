var express = require('express');
const superagent = require('superagent');

var router = express.Router();

/* GET Sync salesforce . */
router.post('/',async function(req, res, next) {
  
	console.log('inside');
	  try {
		const res1 = await superagent.get('https://season-developer-edition.ap7.force.com/services/apexrest/Webhook');
		res.send(JSON.parse(res1.text));
		console.log(res);
	  } catch (err) {
		console.error(err);
	  }
	
});

module.exports = router;
