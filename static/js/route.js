/**
 * Created by pmcc on 16/10/10.
 */
//配置ip
var ip = "";

var routeApp = angular.module('routeApp',['ngRoute','ngSanitize']);
    routeApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $routeProvider.when('/',{templateUrl:'views/main.html',controller:'mainApp'})
            .when('/news/company',{templateUrl:'views/news/list.html',controller:'CompanyNewsListCtrl'})
            .when('/news/company/detail/:id',{templateUrl:'views/news/detail.html',controller:'CompanyNewsDetailCtrl'})
            .when('/news/trade',{templateUrl:'views/news/list.html',controller:'TradeNewsListCtrl'})
            .when('/news/trade/detail/:id',{templateUrl:'views/news/detail.html',controller:'TradeNewsDetailCtrl'})
            .when('/news/service',{templateUrl:'views/news/list.html',controller:'serviceNewsListCtrl'})
            .when('/news/service/detail/:id',{templateUrl:'views/news/detail.html',controller:'serviceNewsDetailCtrl'})
            .when('/about/intro',{templateUrl:'views/about/detail.html',controller:'companyIntroCtrl'})
            .when('/about/culture',{templateUrl:'views/about/detail.html',controller:'companyCultureCtrl'})
            .when('/about/organization',{templateUrl:'views/about/detail.html',controller:'companyOrganizationCtrl'})
            .when('/service/contact',{templateUrl:'views/service/detail.html',controller:'contactCtrl'})
            .when('/service/recruitment',{templateUrl:'views/service/detail.html',controller:'recruitmentCtrl'})
            .when('/service/technology',{templateUrl:'views/service/detail.html',controller:'technologyCtrl'})
            .when('/product/wasteWater',{templateUrl:'views/product/list.html',controller:'wasteWaterCtrl'})
            .when('/product/wasteWater/detail/:id',{templateUrl:'views/product/detail.html',controller:'wasteWaterDetailCtrl'})


            .otherwise({redirectTo:'/'});
    }]);
