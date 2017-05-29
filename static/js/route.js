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

            .when('/product1/details',{templateUrl:'views/details1.html',controller:'details1Ctrl'})
            .when('/product2/details',{templateUrl:'views/details2.html',controller:'details1Ctrl'})
            .when('/product3/details',{templateUrl:'views/details3.html',controller:'details1Ctrl'})
            .when('/product1/buy:productId',{templateUrl:'views/buy1.html',controller:'buyCtrl'})
            .when('/product2/buy:productId',{templateUrl:'views/buy2.html',controller:'buyCtrl'})
            .when('/product3/buy:productId',{templateUrl:'views/buy3.html',controller:'buyCtrl'})
            .when('/product/pay',{templateUrl:'views/pay.html',controller:'payCtrl'})
            .when('/product/topay',{templateUrl:'views/topay.html',controller:'topayCtrl'})
            .when('/about',{templateUrl:'views/about.html'})
            .otherwise({redirectTo:'/'});
    }]);
