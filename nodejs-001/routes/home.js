const express = require("express");
const { route } = require(".");
const router = express.Router();

router.get("/", (req,res)=> {
    res.send("Repu Kore");

});

router.get("/my",(req,res)=> {
    const html = "<div>Korea</div>";
    res.render("home", { nation:"대한민국", html});
});

router.get("/add",(req,res)=> {
    const num1 = req.query.num1
    const num2 = req.query.num2
    const sum = parseInt(num1) + parseInt(num2);
    const result = {
        num1, num2, sum
    };
    res.json(result);

});

router.get("/input", (req,res) => {
    res.render("input");
});
router.post("/input",(req,res)=> {
    const name = req.body.name;
    const tel = req.body.tel;
    const age = req.body.age;

    res.json({ name,tel,age });
})

module.exports = router;