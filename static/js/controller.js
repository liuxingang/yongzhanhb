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
    $http.get(ip + "/api/v1/index/carousel")
        .success(function (data) {
            $scope.data = data.data;
        });

    //加载完成
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 4000,
            speed: 500,
            pagination: '.pagination',
            loop: true,
            grabCursor: true,
            paginationClickable: true,
            autoplayDisableOnInteraction : false,
        });
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

    $http.get(ip + "/api/v1/index/products")
        .success(function (data) {
            $scope.data = data.data;
            console.log(data)
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
            console.log(data)
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
            console.log(data)
        });



});


//首页工程案例轮播图
routeApp.controller('companyNewsCtrl', function($scope,$routeParams, $http) {



    $http.get(ip + "/api/v1/index/companyNews")
        .success(function (data) {
            $scope.data = data.data;
            console.log(data)
        });



});


