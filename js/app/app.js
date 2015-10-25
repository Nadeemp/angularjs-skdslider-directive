
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
            $location.path('/home');   
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
            
            
            
            elm.skdslider({ 'delay':5000, 'animationSpeed': 1000,'showNextPrev':true,'showPlayButton':true,'autoSlide':true,'animationType':'sliding','images':'none'});
        });
    };
});
