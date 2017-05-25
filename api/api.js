/**
 * Created by pmcc on 17/2/5.
 */
'use strict';
var express = require('express');
var router = express.Router();
var data = require('../data.json');
var carouselBanner = data.carouselBanner;
var productsShow = data.productsShow;
var honorList = data.honorList;
var projects = data.projects;
var companyNews = data.companyNews;



//网站首页轮播图 api
router.get('/api/v1/index/carousel',function(req,res){

    res.send({
        data: carouselBanner
    });

});
//网站产品展示轮播图
router.get('/api/v1/index/products',function(req,res){

    res.send({
        data: productsShow
    });

});

//网站首页资质荣誉轮播图
router.get('/api/v1/index/honors',function(req,res){

    res.send({
        data: honorList
    });

});

//网站首页资质荣誉轮播图
router.get('/api/v1/index/projects',function(req,res){

    res.send({
        data: projects
    });

});

//网站首页公司新闻
router.get('/api/v1/index/companyNews',function(req,res){

    res.send({
        data: companyNews
    });

});


//企业概况信息查询 企业简介(intro),发展历程（development），文化理念（cultural）联系我们（connect）
//eg: /api/v1/company?channelName=intro
router.get('/api/v1/company',function (req,res) {
    var channelName = req.query.channelName;
    var sql = "SELECT * FROM company WHERE channelName='"+channelName+"'";
    connection.query(sql,function (err,rows) {
       if (err) throw err;
        res.send(rows);
        console.log(channelName+"查询成功")
    });
});

//动态——公司新闻list
router.get('/api/v1/getCompanyNews',function (req,res) {
    var sql = "SELECT * FROM companyNews WHERE newsType ='companyNews'" ;
    connection.query(sql,function (err,rows) {
        if (err) throw err;
        var data = {data:rows,channelText:'公司新闻'}
        res.send(data);
    });
});

//新闻详情single
//eg: /api/v1/getCompanyNewsById?id =
router.get('/api/v1/getCompanyNewsById',function (req,res) {
    var newsId = req.query.id;
    var sql = "SELECT * FROM companyNews WHERE newsId ='" + newsId +"'";
    connection.query(sql,function (err,rows) {
        if (err) throw err;
        var data = {data:rows};
        res.send(data);
    });
});

//动态——行业新闻list
router.get('/api/v1/getTradeNews',function (req,res) {
    var sql = "SELECT * FROM companyNews WHERE newsType = 'tradeNews'";
    connection.query(sql,function (err,rows) {
        if (err) throw err;
        var data = {data:rows,channelText:'行业新闻'}
        res.send(data);
    });
});



module.exports = router;