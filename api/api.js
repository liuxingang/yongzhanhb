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
var tradeNews = data.tradeNews;
var serviceNews = data.serviceNews;
var aboutUs = data.aboutUs;



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

//公司新闻
router.get('/api/v1/index/companyNews',function(req,res){

    res.send({
        data: companyNews
    });

});

//行业资讯
router.get('/api/v1/index/tradeNews',function(req,res){

    res.send({
        data: tradeNews
    });

});

//技术服务
router.get('/api/v1/index/serviceNews',function(req,res){

    res.send({
        data: serviceNews
    });

});

//企业简介
router.get('/api/v1/about/companyIntro',function(req,res){

    res.send({
        data: aboutUs.companyIntro
    });

});
//企业文化
router.get('/api/v1/about/companyCulture',function(req,res){

    res.send({
        data: aboutUs.companyCulture
    });

});

//组织机构
router.get('/api/v1/about/companyOrganization',function(req,res){

    res.send({
        data: aboutUs.companyOrganization
    });

});






module.exports = router;