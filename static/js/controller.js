/**
 * Created by pmcc on 16/10/10.
 */

//指令
routeApp.directive('onFinishRenderFilters', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
});

routeApp.controller('mainApp', function($scope) {



});



//轮播图
routeApp.controller('carouselCtrl', function ($scope, $routeParams, $http) {

    // //加载完成
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        var mySwiper = new Swiper('.swiper-banner', {
            autoplay: 4000,
            speed: 500,
            pagination: '.pagination',
            loop: true,
            grabCursor: true,
            paginationClickable: true,
            autoplayDisableOnInteraction : false,
        });
    });

    $http.get(ip + "/api/v1/index/carousel")
        .success(function (data) {
            $scope.data = data.data;
        });

});

//首页产品展示轮播图
routeApp.controller('productCarouselCtrl', function($scope,$routeParams, $http) {


    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        var swiper = new Swiper('.productCarousel', {
            autoplay: 3000,
            loop : true,
            slidesPerColumn: 2,
            slidesPerColumnFill : 'row',
            slidesPerView: 4,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next'
        });
    });


    $http.get(ip + "/api/v1/products/wasteWater")
        .success(function (data) {
            $scope.data = data.data.slice(0,6);
        });



});
//首页产品展示2轮播图
routeApp.controller('productCarousel2Ctrl', function($scope,$routeParams, $http) {



    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        var swiper = new Swiper('.productCarousel2', {
            autoplay: 3000,
            loop : true,
            slidesPerColumn: 2,
            slidesPerColumnFill : 'row',
            slidesPerView: 4,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next'
        });
    });

    $http.get(ip + "/api/v1/products/smoke")
        .success(function (data) {
            $scope.data = data.data;
        });



});


//首页资质荣誉轮播图
routeApp.controller('honorCarouselCtrl', function($scope,$routeParams, $http) {

    //加载完成
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        var honorSwiper = new Swiper('.honorCarousel', {
            autoplay: 3000,
            loop : true,
            slidesPerColumnFill : 'row',
        });
        $('.arrow-left').on('click', function(e){
            e.preventDefault()
            honorSwiper.swipePrev()
        })
        $('.arrow-right').on('click', function(e){
            e.preventDefault()
            honorSwiper.swipeNext()
        })
    });


    $http.get(ip + "/api/v1/index/honors")
        .success(function (data) {
            $scope.data = data.data;
        });



});

//首页工程案例轮播图
routeApp.controller('projectCarouselCtrl', function($scope,$routeParams, $http) {

    //加载完成
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        var projectSwiper = new Swiper('.projectCarousel', {
            autoplay: 5000,
            loop: true,
            slidesPerView: 5
        });
    });


    $http.get(ip + "/api/v1/index/products")
        .success(function (data) {
            $scope.data = data.data;
        });



});


//首页新闻列表
routeApp.controller('mainCompanyNewsCtrl', function($scope,$routeParams, $http) {



    $http.get(ip + "/api/v1/index/companyNews")
        .success(function (data) {
            var list = data.data.slice(0,6);
            $scope.data = list;
        });

});



//公司新闻列表页
routeApp.controller('CompanyNewsListCtrl', function($scope,$routeParams, $http) {
    $scope.urlType = "company";
    $http.get(ip + "/api/v1/index/companyNews")
        .success(function (data) {
            $scope.data = data.data;
        });

});
//公司新闻详情页
routeApp.controller('CompanyNewsDetailCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "company";
    var id = $routeParams.id;
    $http.get(ip + "/api/v1/index/companyNews")
        .success(function (data) {
            for(var i= 0;i<data.data.length;i++){
                if(data.data[i].id == id){
                    $scope.data = data.data[i];
                    $scope.content = $sce.trustAsHtml(data.data[i].content)
                }
            }
        });

});


//首页行业资讯
routeApp.controller('mainTradeNewsCtrl', function($scope,$routeParams, $http) {



    $http.get(ip + "/api/v1/index/tradeNews")
        .success(function (data) {
            var list = data.data.slice(0,6);
            $scope.data = list;
        });

});



//行业资讯列表页
routeApp.controller('TradeNewsListCtrl', function($scope,$routeParams, $http) {
    $scope.urlType = "trade";
    $http.get(ip + "/api/v1/index/tradeNews")
        .success(function (data) {
            $scope.data = data.data;
        });

});
//行业资讯详情页
routeApp.controller('TradeNewsDetailCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "trade";
    var id = $routeParams.id;
    $http.get(ip + "/api/v1/index/tradeNews")
        .success(function (data) {
            for(var i= 0;i<data.data.length;i++){
                if(data.data[i].id == id){
                    $scope.data = data.data[i];
                    $scope.content = $sce.trustAsHtml(data.data[i].content)
                }
            }
        });

});


//首页技术服务
routeApp.controller('mainServiceNewsCtrl', function($scope,$routeParams, $http) {



    $http.get(ip + "/api/v1/index/serviceNews")
        .success(function (data) {
            var list = data.data.slice(0,6);
            $scope.data = list;
        });

});



//技术服务列表页
routeApp.controller('serviceNewsListCtrl', function($scope,$routeParams, $http) {
    $scope.urlType = "service";
    $http.get(ip + "/api/v1/index/serviceNews")
        .success(function (data) {
            $scope.data = data.data;
        });

});
//技术服务详情页
routeApp.controller('serviceNewsDetailCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "service";
    var id = $routeParams.id;
    $http.get(ip + "/api/v1/index/serviceNews")
        .success(function (data) {
            for(var i= 0;i<data.data.length;i++){
                if(data.data[i].id == id){
                    $scope.data = data.data[i];
                    $scope.content = $sce.trustAsHtml(data.data[i].content)
                }
            }
        });

});


//企业简介
routeApp.controller('companyIntroCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "intro";
    $http.get(ip + "/api/v1/about/companyIntro")
        .success(function (data) {
            $scope.data = data.data;
            $scope.content = $sce.trustAsHtml(data.data.content)
        });

});

//企业文化
routeApp.controller('companyCultureCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "culture";
    $http.get(ip + "/api/v1/about/companyCulture")
        .success(function (data) {
            $scope.data = data.data;
            $scope.content = $sce.trustAsHtml(data.data.content)
        });

});
//组织机构
routeApp.controller('companyOrganizationCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "organization";
    $http.get(ip + "/api/v1/about/companyOrganization")
        .success(function (data) {
            $scope.data = data.data;
            $scope.content = $sce.trustAsHtml(data.data.content)
        });

});
//经营范围
routeApp.controller('companyBusinessCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "business";
    $http.get(ip + "/api/v1/about/companyBusiness")
        .success(function (data) {
            $scope.data = data.data;
            $scope.content = $sce.trustAsHtml(data.data.content)
        });

});

//资质荣誉
routeApp.controller('companyHonorCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "honor";
    $http.get(ip + "/api/v1/index/honors")
        .success(function (data) {
            $scope.data = data.data;
            $scope.content = $sce.trustAsHtml(data.data.content)
        });

});

//联系我们
routeApp.controller('contactCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "contact";
    $http.get(ip + "/api/v1/service/contact")
        .success(function (data) {
            $scope.data = data.data;
            $scope.content = $sce.trustAsHtml(data.data.content)
        });

});
//人才招聘
routeApp.controller('recruitmentCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "recruitment";
    $http.get(ip + "/api/v1/service/recruitment")
        .success(function (data) {
            $scope.data = data.data;
            $scope.content = $sce.trustAsHtml(data.data.content)
        });

});
//技术服务
routeApp.controller('technologyCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "technology";
    $http.get(ip + "/api/v1/service/technology")
        .success(function (data) {
            $scope.data = data.data;
            $scope.content = $sce.trustAsHtml(data.data.content)
        });

});



//废水处理列表页
routeApp.controller('wasteWaterCtrl', function($scope,$routeParams, $http) {
    $scope.urlType = "wasteWater";
    $http.get(ip + "/api/v1/products/wasteWater")
        .success(function (data) {
            $scope.data = data.data;
        });

});
//废水处理详情页
routeApp.controller('wasteWaterDetailCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "wasteWater";
    var id = $routeParams.id;
    $http.get(ip + "/api/v1/products/wasteWater")
        .success(function (data) {
            for(var i= 0;i<data.data.length;i++){
                if(data.data[i].id == id){
                    $scope.data = data.data[i];
                    $scope.content = $sce.trustAsHtml(data.data[i].content)
                }
            }
        });

});

//烟气处理列表页
routeApp.controller('smokeCtrl', function($scope,$routeParams, $http) {
    $scope.urlType = "smoke";
    $http.get(ip + "/api/v1/products/smoke")
        .success(function (data) {
            $scope.data = data.data;
        });

});
//烟气处理详情页
routeApp.controller('smokeDetailCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "smoke";
    var id = $routeParams.id;
    $http.get(ip + "/api/v1/products/smoke")
        .success(function (data) {
            for(var i= 0;i<data.data.length;i++){
                if(data.data[i].id == id){
                    $scope.data = data.data[i];
                    $scope.content = $sce.trustAsHtml(data.data[i].content)
                }
            }
        });

});

//噪声处理列表页
routeApp.controller('noiseCtrl', function($scope,$routeParams, $http) {
    $scope.urlType = "noise";
    $http.get(ip + "/api/v1/products/noise")
        .success(function (data) {
            $scope.data = data.data;
        });

});
//噪声处理详情页
routeApp.controller('noiseDetailCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "noise";
    var id = $routeParams.id;
    $http.get(ip + "/api/v1/products/noise")
        .success(function (data) {
            for(var i= 0;i<data.data.length;i++){
                if(data.data[i].id == id){
                    $scope.data = data.data[i];
                    $scope.content = $sce.trustAsHtml(data.data[i].content)
                }
            }
        });

});


