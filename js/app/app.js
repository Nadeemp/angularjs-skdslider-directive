
var pcApp = angular.module('pcApp', ['ngRoute', 'ngTouch','ngAnimate']);
pcApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        
        resolve:{
        "check":function($location,$rootScope,$http){
            
            //======save banner=========================//
            /* $http.get("http://www.ofa.om/ofa-frontbanner").success(function (res) {
               
                $rootScope.saveBanner(res.data.details);
            }).error();*/
           /* $rootScope.ofaapi({ 
                url: 'ofa-frontbanner',
                data: {},
                success: function (res) {           
                  $rootScope.saveBanner(res.data.details);
                }
             });*/
            
            
            //========end of save banner==============//
            
            // if($rootScope.language.language){ 
            //     $location.path('/home'); 
            //      //$location.path('/landing');    
            // }else{
            //     $location.path('/landing');    
            // }
        }
      }
        
      
    }).when('/home', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeController'
    });
    
});

pcApp.directive('slideit',function() {
    return function(scope, elm, attrs) {
        scope.$watch(attrs.slideit, function(images) {
            
            /*$http.get("http://www.ofa.om/ofa-frontbanner").success(function (res) {
            alert("banner imgs"+JSON.stringify(res));
             
           // $scope.images=res.data.details;
              
               $rootScope.hideActivity();
            
            }).error($rootScope.handleHttpError);*/
            
            
           // alert("images--"+JSON.stringify(images));
           
           
           /*var html = '';
            for (var i = 0; i < images.length; i++) {
                 //html += '<li><img ng-src="' + images[i] + '" alt="" /></li>';
                html += '<li  ><img src="http://www.opl.om/sites/default/files/'+images[i].banner_image+'" width="683" height="389"><div class="slide-desc"><h2  id="home-section1" data-speed="5">'+images[i].banner_title+'</h2></div></li>'
            }
            elm[0].innerHTML = html;*/
            
            elm.skdslider({ 'delay':5000, 'animationSpeed': 1000,'showNextPrev':true,'showPlayButton':true,'autoSlide':true,'animationType':'sliding','images':'none'});
        });
    };
});
