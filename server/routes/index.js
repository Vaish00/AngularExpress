var express = require('express');
var router = express.Router();
let api= require('../controller/api')
/* GET home page. */
router.post('/bulkupload', api.bulkupload);
router.get('/listSpare', api.listSpare);


module.exports = router;
