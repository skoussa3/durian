const vm = require('vm');

const express = require('express');
const router = express.Router();


// http://localhost:3000/eval?code=this.process.env
router.get('/eval', function(req, res) {
    res.send(eval(req.query.code));
});


// http://localhost:3000/vm?code=this.constructor.constructor(%27return%20process%27)().env
router.get('/vm', function(req, res) {
    const result = vm.runInNewContext(req.query.code);
    res.send(result);
});

// http://localhost:3000/eval?code=this.process.env
   
router.get('/handle', function(req, res) {
// BAD: the category might have SQL special characters in it

var query1 = "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY='"
             + req.params.category + "' ORDER BY PRICE";
pool.query(query1, [], function(err, results) {
    // process results

  });

module.exports = router;
