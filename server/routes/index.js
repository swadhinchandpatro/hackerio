const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
  console.log('server hit')
  res.json({
    message: "registered user",
  });
})

module.exports = router;