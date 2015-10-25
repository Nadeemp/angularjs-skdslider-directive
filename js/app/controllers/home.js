pcApp.controller('HomeController', function ($scope, $rootScope, $filter, $route,$timeout,$http) {
 
   //$rootScope.banner_images=$rootScope.banner;
   $rootScope.banner_images=[{'banner_image':'image_1.jpg'},{'banner_image':'image_2.jpg'},{'banner_image':'image_3.jpg'}];
    //$rootScope.saveLanguage({});
   //$rootScope.showActivity();
  ///$http.get("http://www.ofa.om/ofa-frontbanner").success(function (res) {
    //  $rootScope.hideActivity();
        //alert("banner imgs"+JSON.stringify(res));
           //   $rootScope.banner_images=res.data.details.album_images;
               //slides=res.data.details;
             // $scope.banner_images=res.data.details.album_images;
             //$scope.banner_images=res.data.details.album_images;
            // var res={"status":"success","code":200,"msg":"","data":{"details":{"album_title":"Week at the OPL","album_images":["DSC_6600.jpg","DSC_6619.jpg"]}}};
           //  $scope.banner_images=res.data.details;
             // $rootScope.hideActivity();
            //alert("banner imgs"+JSON.stringify($scope.banner_images));
           // }).error();
           // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        //alert("prev");
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.banner_images.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        //alert("next");
        $scope._Index = ($scope._Index < $scope.banner_images.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        //alert("clicked"+index);
        $scope._Index = index;
    };
   var timer;
        var sliderFunc = function() {
           // alert("hi");
          timer = $timeout(function() {
             // alert("time oput");
            $scope.showNext();
            timer = $timeout(sliderFunc, 1000);
          }, 1000);
        };

        sliderFunc();
 
            
   

});