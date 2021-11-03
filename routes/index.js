var express = require("express");
var router = express.Router();

const apps = [
  {
    name: "Math Expression Evaluator",
    url: "/math",
  },
  {
    name: "WIP App",
    url: "#",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { apps });
});

module.exports = router;
