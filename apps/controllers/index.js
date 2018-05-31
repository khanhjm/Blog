var express = require("express");
var router = express.Router();

router.use("/admin", require(__dirname + "/admin"));
router.use("/blog", require(__dirname + "/blog"));

router.get("/", function(req, res){
    var data = post_md.getAllPosts();
    data.then(function(posts) {
        var result = {
            posts: posts,
            error: false
        };
        res.render("blog/index", {data: result});
    }).catch(function(err) {
        var result = {
            error: "Could not gets posts data"
        };
        res.render("blog/index", {data: result});
    })
});
router.get("/about", function(req, res){
    res.render("blog/about");
});
router.get("/contact", function(req, res){
    res.render("blog/contact");
});
router.get("/khanhjm", function(req, res){
    res.render("blog/about");
});
module.exports = router;