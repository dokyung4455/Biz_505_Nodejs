
// express framework의 객체 선언
const express = require('express');

// express framework 에서 routing 을 수행하기 위한 sub 객체선언
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req,res,next) {
  res.send("Hello Korea");
});

router.get("/json", function(req,res) {
  let mData = {
    name:"홍길동",
    tel : "020-222-1111",
    age : 33
  }

  res.json(mData)
})
module.exports = router;
