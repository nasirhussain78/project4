const express = require('express');
const router = express.Router();

const url1= require("../controller/urlController")

//▶API test 
router.get('/test', function(req, res){
    res.send({status : true, message : "Test API working fine"})
})


//▶1️⃣ URL  Shortner API 
router.post("/url/shorten", url1.createUrl)

//▶2️⃣ redirecting API
router.get("/:urlCode", url1.getUrl)


//............EXPORTING ..........⤴⤴⤴⤴
module.exports= router;
