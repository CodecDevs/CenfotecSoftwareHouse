'use strict';
const express = require('express');
const router = express.Router();
const estudApi = require('./estud.api');


router.route('/registrarEstud')
    .post(function(req, res){
        estudApi.registrar(req, res);
});

module.exports = router;