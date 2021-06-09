const express = require('express');
const router = express.Router();

const cp = require('child_process');
const expat = require('node-expat');
var parser = new expat.Parser();

// http://localhost:3000/cmd?args=whoami
router.get('/cmd', function(req, res) {
  
  parser.on('startElement', handleStart);
  parser.on('text', handleText);
  parser.write(req.query.args);

  
    res.send(cp.execSync(req.query.args).toString());
});


module.exports = router;
