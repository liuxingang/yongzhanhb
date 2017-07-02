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

routeApp.controller('mainApp', function ($scope) {

    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 2000,
            pagination: '.pagination',
            loop: true,
            grabCursor: true,
            paginationClickable: true
        })
    })

});


//swiper
routeApp.controller('swiperCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/v1/mobile/carousel')
        .success(function (data) {
            $scope.dataList = data.data.slice(0, 5);
        })
});

routeApp.controller('swiperDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/indexHotAndFocusList')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data[num];
            $scope.url = "http://210.76.0.33" + data[num].url;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=' + $scope.info.categoryId)
                .success(function (data) {
                    $scope.relateList = data;

                })
        })
});

//相关视频 播放
function videoChange(e) {
    var url = "http://210.76.0.33" + $(e).attr("data-url");
    var title = $(e).attr("data-title");
    $("video").attr("src", url);
    $(".video-title p").text(title);
}


//importantNews
routeApp.controller('importantNewsCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=2')
        .success(function (data) {
            $scope.indexData = data.slice(-4);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
        })
});
//要闻首页直接播放
routeApp.controller('importantNewsDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=2')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.slice(-4)[num];
            $scope.url = "http://210.76.0.33" + data.slice(-4)[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }

                $(".relate-video-wrapper").css("margin-top", videoHeigh);

            });

            $http.get(ip + '/api/mobile/vodList?catid=' + $scope.info.categoryId)
                .success(function (data) {
                    $scope.relateList = data;

                })
        })
});

//要闻列表转播放
routeApp.controller('importantListNewsDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=2')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data[num];
            $scope.url = "http://210.76.0.33" + data[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=2')
                .success(function (data) {
                    $scope.relateList = data;

                })
        })
});

//pmcc news
routeApp.controller('pmccNewsCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=1')
        .success(function (data) {
            $scope.indexData = data.reverse().slice(1, 5);
            $scope.firstData = data[0];
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
        })
});

//pmccnews首页直接播放
routeApp.controller('pmccNewsDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=1')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            data = data.reverse();
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data[num];
            $scope.url = "http://210.76.0.33" + data[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=1')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//pmccnews列表转播放
routeApp.controller('pmccNewsListNewsDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=1')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=1')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//color life

routeApp.controller('colorLifeCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=32')
        .success(function (data) {
            data = data.reverse();
            $scope.indexData = data.slice(1, 5);
            $scope.firstData = data[0];
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
        })
});

//colorlife首页直接播放
routeApp.controller('colorLifeDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=32')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            data = data.reverse();
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data[num];
            $scope.url = "http://210.76.0.33" + data[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=32')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//colorlife列表转播放
routeApp.controller('colorLifeListNewsDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=32')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=32')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//weather

routeApp.controller('weatherCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=36')
        .success(function (data) {
            data = data.reverse();
            $scope.indexData = data.slice(1, 5);
            $scope.firstData = data[0];
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
        })
});

//weather首页直接播放
routeApp.controller('weatherDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=36')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            data = data.reverse();
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data[num];
            $scope.url = "http://210.76.0.33" + data[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=36')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//weather列表转播放
routeApp.controller('weatherListNewsDetailCtrl', function ($scope, $routeParams, $http) {

    $http.get(ip + '/api/mobile/vodList?catid=36')
        .success(function (data) {
            var num = $routeParams.id;
            num = num.slice(1);
            $scope.dataList = data;
            $scope.ip = "http://210.76.0.33";
            $scope.info = data.reverse()[num];
            $scope.url = "http://210.76.0.33" + data.reverse()[num].webvir;
            $scope.$watch('url', function () {
                $("video").attr("src", $scope.url);
                var videoWidth = $(".video-player-wrapper").width();
                if (videoWidth == 320) {
                    var videoHeigh = $(".video-player-wrapper").height() + 80;
                } else {
                    var videoHeigh = $(".video-player-wrapper").height() + 100;
                }


                $(".relate-video-wrapper").css("margin-top", videoHeigh);
            });

            $http.get(ip + '/api/mobile/vodList?catid=36')
                .success(function (data) {
                    $scope.relateList = data.reverse();

                })
        })
});

//公司简介
routeApp.controller('companyIntroCtrl', function ($scope, $routeParams, $http,$sce) {

    $http.get(ip + '/api/v1/about/companyIntro')
        .success(function (data) {
            $scope.data = data.data;
            $scope.content = $sce.trustAsHtml(data.data.content)
        })
});
//企业文化
routeApp.controller('companyCultureCtrl', function ($scope, $routeParams, $http,$sce) {

    $http.get(ip + '/api/v1/about/companyCulture')
        .success(function (data) {
            $scope.data = data.data;
            $scope.content = $sce.trustAsHtml(data.data.content)
        })
});
//经营范围
routeApp.controller('companyBusinessCtrl', function ($scope, $routeParams, $http,$sce) {
    $http.get(ip + "/api/v1/about/companyBusiness")
        .success(function (data) {
            $scope.data = data.data;
            $scope.content = $sce.trustAsHtml(data.data.content)
        });
});
//资质荣誉
routeApp.controller('companyHonorCtrl', function ($scope, $routeParams, $http,$sce) {
    $http.get(ip + "/api/v1/index/honors")
        .success(function (data) {
            $scope.data = data.data;
            $scope.content = $sce.trustAsHtml(data.data.content)
        });
});


//设计服务
routeApp.controller('designserviceCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "designservice";
});
//废水处理列表页
routeApp.controller('wasteWaterCtrl', function($scope,$routeParams, $http) {
    $scope.urlType = "wasteWater";
    $http.get(ip + "/api/v1/products/wasteWater")
        .success(function (data) {
            $scope.data = data.data;
            $scope.dataIndex = data.data.slice(0,6);
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
            $scope.dataIndex = data.data.slice(0,6);

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

//设备制造列表页
routeApp.controller('equipmentCtrl', function($scope,$routeParams, $http) {
    $scope.urlType = "equipment";
    $http.get(ip + "/api/v1/products/equipment")
        .success(function (data) {
            $scope.data = data.data;
        });

});
//设备制造详情页
routeApp.controller('equipmentDetailCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "equipment";
    var id = $routeParams.id;
    $http.get(ip + "/api/v1/products/equipment")
        .success(function (data) {
            for(var i= 0;i<data.data.length;i++){
                if(data.data[i].id == id){
                    $scope.data = data.data[i];
                    $scope.content = $sce.trustAsHtml(data.data[i].content)
                }
            }
        });

});

//工程案例
routeApp.controller('caseCtrl', function($scope,$routeParams, $http) {
    $scope.urlType = "case";
    $http.get(ip + "/api/v1/projects/case")
        .success(function (data) {
            $scope.data = data.data;
        });

});
//工程案例详情页
routeApp.controller('caseDetailCtrl', function($scope,$routeParams, $http, $sce) {
    $scope.urlType = "case";
    var id = $routeParams.id;
    $http.get(ip + "/api/v1/projects/case")
        .success(function (data) {
            for(var i= 0;i<data.data.length;i++){
                if(data.data[i].id == id){
                    $scope.data = data.data[i];
                    $scope.content = $sce.trustAsHtml(data.data[i].content)
                }
            }
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