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
            .when('/about/business',{templateUrl:'views/about/bussiness_detail.html',controller:'companyBusinessCtrl'})
            .when('/about/honor',{templateUrl:'views/about/honor.html',controller:'companyHonorCtrl'})
            .when('/service/contact',{templateUrl:'views/service/contact_detail.html',controller:'contactCtrl'})
            .when('/service/recruitment',{templateUrl:'views/service/detail.html',controller:'recruitmentCtrl'})
            .when('/service/technology',{templateUrl:'views/service/technology_detail.html',controller:'technologyCtrl'})
            .when('/product/designservice',{templateUrl:'views/product/technology_detail.html',controller:'designserviceCtrl'})
            .when('/product/wasteWater',{templateUrl:'views/product/list.html',controller:'wasteWaterCtrl'})
            .when('/product/wasteWater/detail/:id',{templateUrl:'views/product/detail.html',controller:'wasteWaterDetailCtrl'})
            .when('/product/smoke',{templateUrl:'views/product/list.html',controller:'smokeCtrl'})
            .when('/product/smoke/detail/:id',{templateUrl:'views/product/detail.html',controller:'smokeDetailCtrl'})
            .when('/product/noise',{templateUrl:'views/product/list.html',controller:'noiseCtrl'})
            .when('/product/noise/detail/:id',{templateUrl:'views/product/detail.html',controller:'noiseDetailCtrl'})
            .when('/product/equipment',{templateUrl:'views/product/list.html',controller:'equipmentCtrl'})
            .when('/product/equipment/detail/:id',{templateUrl:'views/product/detail.html',controller:'equipmentDetailCtrl'})
            .when('/project/case',{templateUrl:'views/project/list.html',controller:'caseCtrl'})
            .when('/project/case/detail/:id',{templateUrl:'views/project/detail.html',controller:'caseDetailCtrl'})

            .otherwise({redirectTo:'/'});
    }]);
