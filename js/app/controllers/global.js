pcApp.controller('BodyController', function ($scope, $location, $rootScope, $route, $filter, $http,$window) {
    /*$http.get("http://www.ofa.om/ofa-frontbanner").success(function (res) {
            alert("banner imgs"+JSON.stringify(res));
             
               $rootScope.banner_images=res.data.details;
              //QueueService.loadManifest(slides);
              $rootScope.hideActivity();
            
            }).error($rootScope.handleHttpError);*/
    
    $rootScope.getAge = function (date_str) {
        var today = new Date();
        var birthDate = new Date(date_str);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    };
    $rootScope.banner_images=[];
    $rootScope.current_gallery=[];
    $rootScope.current_gallery_title="";
   $rootScope.gallery_status=0;
   $rootScope.viewphoto_status={staus:0,id:''};
    var $content = $('.content');
    var $nav = $('.deploy-nav');
     var $football_move = $('.football-move');
    $rootScope.cart = [];
    $rootScope.custom=true;
    $rootScope.loaded_status=1;
    //$rootScope.show_social=true;
    $rootScope.patterns = {
        password: /^.{6,30}$/,
        phone: /[0-9\-]{5,30}$/,
        zip: /^\d{4,10}$/
    };
    
    var $html = $('html');
    
    $rootScope.addRtl = function () {
       $html.addClass('rtl');
       
       
    };
    $rootScope.removeRtl = function () {
       $html.removeClass('rtl'); 
    };
    function addFocus() {
        $html.addClass('hide-header-footer');
    }
    function removeFocus() {
        $html.removeClass('hide-header-footer');
    }
    
    
    $rootScope.clickSocial= function(url){
        //console.log("clicked on social");
        
        if(url=="twitter"){
             //$window.location.href = "https://twitter.com/OmanFA";
            // var ref = $window.open(encodeURI('https://twitter.com/OmanFA'), '_blank', 'location=yes');
            if(device.platform === 'Android') {
                navigator.app.loadUrl("https://twitter.com/OmanFA", {openExternal : true});
            } else {
                
                window.open(encodeURI('https://twitter.com/OmanFA'), '_system');
            }
            //navigator.app.loadUrl("https://twitter.com/OmanFA", {openExternal : true});
        
        }
        if(url=="facebook"){
             //$window.location.href = "https://www.facebook.com/OmanNationalFootballTeam";
             // var ref = $window.open(encodeURI('https://www.facebook.com/OmanNationalFootballTeam'), '_blank', 'location=yes');
             // navigator.app.loadUrl("https://www.facebook.com/OmanNationalFootballTeam", {openExternal : true});
          if(device.platform === 'Android') {
                navigator.app.loadUrl("https://www.facebook.com/OmanNationalFootballTeam", {openExternal : true});
            } else {
               
                window.open(encodeURI('https://www.facebook.com/OmanNationalFootballTeam'), '_system');
            }
        }
        if(url=="instagram"){
            // $window.location.href = "http://instagram.com/omanfootballassociation";
            // var ref = $window.open(encodeURI('http://instagram.com/omanfootballassociation'), '_blank', 'location=yes');
            //navigator.app.loadUrl("http://instagram.com/omanfootballassociation", {openExternal : true});
           if(device.platform === 'Android') {
                navigator.app.loadUrl("http://instagram.com/omanfootballassociation", {openExternal : true});
            } else {
                
                window.open(encodeURI('http://instagram.com/omanfootballassociation'), '_system');
            }
        }
       
        if(url=="shop"){
            // $window.location.href = " http://roumaan.om/ofa";
             //var ref = $window.open(encodeURI('http://roumaan.om/ofa'), '_blank', 'location=yes');
             //navigator.app.loadUrl("http://roumaan.om/ofa", {openExternal : true});
            if(device.platform === 'Android') {
                navigator.app.loadUrl("http://roumaan.om/ofa", {openExternal : true});
            } else {
                
                window.open(encodeURI('http://roumaan.om/ofa'), '_system');
            }
        }    
       
    }
    var $social = $('.social');
    var $body = $('body');
    $scope.hideSocial = function () {
        if ($social.is(':animated'))
            return;
        $body.addClass('social-active-body2');
        $social.animate({'margin-right': '-79px'});
        //$nav.removeClass('active');
        
        $social.removeClass('social-active');
    };
    $scope.showSocial = function () {
        if ($social.is(':animated'))
            return;
        $body.addClass('social-active-body1');
        $social.animate({'margin-right': '0px'});
       // $nav.addClass('active');
       $social.addClass('social-active');
    };
    $scope.handleSocial = function () {
        if ($social.hasClass('social-active')) {
            $scope.hideSocial();
        } else {
            $scope.showSocial();
        }
    };
     function addFocus() {
        $html.addClass('hide-header-footer');
    }
    $rootScope.$on('$routeChangeSuccess', removeFocus);

    var formSelector = 'input[type="text"], input[type="password"],input[type="email"], input[type="number"], textarea';
    $('#wrapper').on('focus', formSelector, addFocus).on('blur', formSelector, removeFocus);

    $rootScope.html = function (str) {
        return $sce.trustAsHtml(str);
    };
    if (localStorage.getItem('shop_cart')) {
        //alert((localStorage.getItem('shop_cart')));
      localStorage.clear();
        //alert("local storage"+ ( localStorage.getItem('shop_cart_stories')));
        //$rootScope.cart = JSON.parse(localStorage.getItem('shop_cart'));
    }
    $rootScope.banner_images='';
   
  $rootScope.category_tree="";  
  $rootScope.saveCategory = function () {
        //alert("inside save");
        localStorage.setItem('shop_category', JSON.stringify($rootScope.category_tree));
    };  
$rootScope.postdata="";
    $rootScope.saveCart = function () {
        localStorage.setItem('shop_cart', JSON.stringify($rootScope.cart));
    };
    $scope.cat=0;
    $scope.cat1=0;
    $scope.submenu_var=0;
     $scope.mainmenu_var=0;
     $scope.temp_cat='';
     
    $scope.handleMenuold = function ($categories) {
         $rootScope.pageTitle = $categories.name;
      //  $scope.obj.toggle2=true;
       
        //alert("alert menu"+$scope.obj.toggle2);
       // $scope.obj.toggle2=false;
       /* if ($nav.hasClass('active')) {
           
            $scope.hideMenu();
        } else {
           
            $scope.showMenu();
        }*/
       
                
                //$scope.mainmenu_var=1;
                //alert("temp cattt"+$scope.temp_cat);
                if($scope.temp_cat=='' ){
                     $scope.temp_cat=$categories.name;
                }
                //alert("inside main menu----"+JSON.stringify($categories));
                $scope.category_inn=$categories;
                $scope.category_main=$categories.name;
                //alert("cat cla"+$scope.cat);
                if($scope.cat){
                     if($scope.temp_cat==$categories.name){
                         //alert("insideeeee");
                         $scope.cat=false;
                     }else{
                     $scope.cat=true;
                     $scope.temp_cat=$categories.name;
                    // alert("else part");
                    }
                    
                }else{
                //alert($scope.cat);
                $scope.cat=true;
                // alert("handle");
                }
            
                return;
    };
    $rootScope.loadJavascript = function(url, type, charset) {
       // alert("hi");
    if (type===undefined) type = 'text/javascript';
    if (url) {
        var script = document.querySelector("script[src*='"+url+"']");
        if (!script) {
            var heads = document.getElementsByTagName("head");
            if (heads && heads.length) {
                var head = heads[0];
                if (head) {
                    script = document.createElement('script');
                    script.setAttribute('src', url);
                    script.setAttribute('type', type);
                    if (charset) script.setAttribute('charset', charset);
                    head.appendChild(script);
                }
            }
        }
        //alert(script);
        return script;
    }
};

$rootScope.removeJavascript = function(url, type, charset) {
    //var item = document.getElementByTagName("head").childNodes[0];
    //alert(item);
     if (type===undefined) type = 'text/javascript';
    if (url) {
    var heads = document.getElementsByTagName("head");
         // alert(JSON.stringify(heads));
           if (heads && heads.length) {
                var head = heads[0];
                if (head) {
                  script = document.createElement('script');
                    script.setAttribute('src', url);
                    script.setAttribute('type', type);
                    script.setAttribute('charset', charset);
                    head.removeChild(script);
                   rerurn;
               
            }
         }
     }
};
    $scope.handleSubMenu=function ($categories){
        // alert("alert menu"+$scope.obj.toggle2);
       // $scope.obj.toggle2=true;
        //alert("inside sub menu--"+JSON.stringify($categories));
        $scope.category_s_inn=$categories;
        $scope.category_sub=$categories.name;
        $rootScope.pageTitle = $categories.name;
        if($scope.cat1){
             $scope.cat1=false;
        }else{
        //alert($scope.cat1);
        $scope.cat1=true;
        // alert("handle");
        
        }
        //alert("sec"+$scope.cat);
       
        $scope.submenu_var=1;
         return;
    };
    
    //if(!$rootScope.language.language){
        
   // var myEl = angular.element( document.querySelector( 'header' ) );
         
       
   //  myEl.addClass('header-hide');   
 
    //}
     $scope.moveBallLeft = function (lang) {
         
        // alert("English"+lang);
          var myEl = angular.element( document.querySelector( '#football-move' ) );
        //$football_move.addClass('moveright');
         //alert(JSON.stringify(myEl));
         myEl.addClass('moveleft');  
         
          $timeout(function(){ $rootScope.go('/home'); }, 500);
          
         // $rootScope.go('/home');
     /*    if ($rootScope.language.language) {
                $rootScope.go('/home');
            }else{
                 
                 $rootScope.saveLanguage({language:'en'});
                  $rootScope.go('/home');
            }*/
        // alert("lang-selected"+$rootScope.language);
     };
       $scope.moveBallRight = function (lang) {
         //alert("Arabic"+lang);
        /*if ($football_move.is(':animated')){
            alert("not animated");
            return;
        }else{
             alert("in animated");
          $football_move.animate({'margin-left': '400px'});
         }*/
        var myEl = angular.element( document.querySelector( '#football-move' ) );
         //  $football_move.addClass('moveright');
        // alert(JSON.stringify($rootScope.language));
       
           myEl.addClass('moveright');   
          $timeout(function(){ $rootScope.go('/home'); }, 500);
          // alert("lang-selected"+ JSON.stringify($rootScope.language));
         /*   if ($rootScope.language.language) {
               
                alert("in if");
                $rootScope.go('/home');
            }else{
                 alert("in else");
                 $rootScope.saveLanguage({language:'ar'});
                  $rootScope.go('/home');
            }*/
         
           
     };
    $scope.showMenu = function () {
        if ($content.is(':animated'))
            return;
        $content.animate({'margin-left': '200px'});
        $nav.addClass('active');
    };
   $scope.hideMenu = function () {
        if ($content.is(':animated'))
            return;
        $content.animate({'margin-left': '0'});
        $nav.removeClass('active');
    };
   $scope.handleMenu = function () {
        if ($nav.hasClass('active')) {
            $scope.hideMenu();
        } else {
            $scope.showMenu();
        }
    };
   
$scope.changeTab = function(tab) {
    $scope.view_tab = tab;
}
//================user info=============//

 $rootScope.userinfo = {};

    if (localStorage.getItem('user_info')) {
        $rootScope.userinfo = JSON.parse(localStorage.getItem('user_info'));
    }
    
    $rootScope.saveUserinfo = function (user) {
        $rootScope.userinfo = user;
        localStorage.setItem('user_info', JSON.stringify($rootScope.userinfo));
    };

//================end of save userinfo===//
//===============save clubs===============//
$rootScope.my_club = "OPL";
$rootScope.my_club_ar = "OPL";
$rootScope.club = {};

if (localStorage.getItem('user_club')) {
     $rootScope.club = JSON.parse(localStorage.getItem('user_club'));
     $rootScope.my_club=$rootScope.club.club_title;
 }
$rootScope.saveClub = function (lang) {
        $rootScope.club = lang;
        localStorage.setItem('user_club', JSON.stringify($rootScope.club));
        $rootScope.my_club = $rootScope.club.club_title;
        $rootScope.my_club_ar = $rootScope.club.club_title_ar;
        
    };
  if (localStorage.getItem('user_club')) {
        $rootScope.club = JSON.parse(localStorage.getItem('user_club'));
    }

//===============clubs===============//
//=============saving======banner image==========//
$rootScope.banner = {};   
if (localStorage.getItem('user_banner')) {
     $rootScope.banner = JSON.parse(localStorage.getItem('user_banner'));
 }
$rootScope.saveBanner = function (lang) {
        $rootScope.banner = lang;
        localStorage.setItem('user_banner', JSON.stringify($rootScope.banner));
    };
  if (localStorage.getItem('user_banner')) {
        $rootScope.banner = JSON.parse(localStorage.getItem('user_banner'));
    }
//==============end of banner saving images===============//

  $rootScope.language = {};   
if (localStorage.getItem('user_language')) {
     $rootScope.language = JSON.parse(localStorage.getItem('user_language'));
 }
$rootScope.saveLanguage = function (lang) {
        $rootScope.language = lang;
        localStorage.setItem('user_language', JSON.stringify($rootScope.language));
    };
  if (localStorage.getItem('user_language')) {
        $rootScope.language = JSON.parse(localStorage.getItem('user_language'));
    }

    $rootScope.user = {};

    if (localStorage.getItem('shop_user')) {
        $rootScope.user = JSON.parse(localStorage.getItem('shop_user'));
    }
    
    $rootScope.saveUser = function (user) {
        $rootScope.user = user;
        localStorage.setItem('shop_user', JSON.stringify($rootScope.user));
    };
    $rootScope.onViewLoad = function () {

    };
   $rootScope.catHide=function (obj){
       //alert("iside"+JSON.stringify(obj) );
       if( $scope.obj.toggle2 === true){
           $scope.obj.toggle2 = false;
       }else{
           $scope.obj.toggle2 = true;
       }
      // alert("iside"+$scope.obj.toggle2);
   };
    $rootScope.go = function (path,event) {
      // alert("path"+path);
      //$scope.handleSocial();
      if(event!=''){
        $('.menu-item').removeClass('active');
        $(event.target).addClass('active');
          $location.path(path.replace('#', ''));
          //$scope.hideMenu();
      }else{
          
          $location.path(path.replace('#', ''));
         // $scope.hideMenu();
      }
    };
    $rootScope.removeProductCart = function (id) {
       // alert("removecart"+JSON.stringify($rootScope.cart));
        $rootScope.cart = $filter('filter')($rootScope.cart, {id: id}, function (a, e) {
            //alert("removepro"+JSON.stringify("a-"+a+"e"+e));
            
            return a != e
        });
        
        $rootScope.saveCart();
    };

    $rootScope.showMessage = function (data) {
        $rootScope.dialog.okText = 'OK';
        $rootScope.dialog.title = data.title;
        $rootScope.dialog.message = data.message;
        $rootScope.dialog.show = true;
        $rootScope.dialog.showCancel = false;
        $rootScope.dialog.retry = function () {

        };
    };

    $rootScope.showConfirm = function (data) {
        $rootScope.dialog.okText = 'Yes';
        $rootScope.dialog.title = data.title;
        $rootScope.dialog.message = data.message;
        $rootScope.dialog.show = true;
        $rootScope.dialog.showCancel = true;
        $rootScope.dialog.retry = data.callback;
    };

    $rootScope.dialog = {
        show: false,
        message: '',
        title: '',
        showCancel: false,
        okText: 'OK',
        retry: function () {
        }
    };
    $rootScope.dialog.show = false;
    $('#app-popup').removeClass('hidden');
    $rootScope.handleHttpError = function (d) {
       
       
      $rootScope.dialog.show = true;
      
        /*$rootScope.dialog.show = true;
        if (!d.status) {
            $rootScope.dialog.message = "Error connecting server, do you want to retry?";
            $rootScope.dialog.title = "Network Error";
        } else {
            $rootScope.dialog.title = "Server Error";
            $rootScope.dialog.message = "Some server error occured, do you want to retry?";
        }*/
        $rootScope.dialog.retry = function () {
            $route.reload();
        };
      //  $rootScope.dialog.showCancel = true;
        $rootScope.hideActivity();
    };


$rootScope.topcssval='55px';
$rootScope.header_display='block';
    $rootScope.api = function (settings) {        
        $rootScope.showActivity();
        var data = {key: appConfig.key};
        if ($rootScope.isLoggedIn()) {
            data.email = $rootScope.user.email;
            data.passwd = $rootScope.user.passwd;
        }
        
        //alert('post data--'+ JSON.stringify(settings.data)); 
        //http://122.166.42.158:8085/stories/
        //alert(JSON.stringify(settings.data));
        //delete $http.defaults.headers.common['X-Requested-With'];
         // $http.post('http://10.10.10.31/stories/stories_updated/stories_wrappers/soapCategories.php',{category_id:""}).success(function(response) { alert(response); });
        // $http.post("http://10.10.10.31/stories/stories_updated"+settings.url,settings.data).success(function (res) {
       
       //192.168.200.89/stories_updated
       //alert(appConfig.url+settings.url);
         var final_url=$rootScope.getFinalurl();
      
     
        $http.get(final_url+settings.url,settings.data).success(function (res) {
              //alert(JSON.stringify(res));
             
            
             
               $rootScope.hideActivity();
            if (settings.checkLogin && !$rootScope.validateLogin(res)) {
                return;
            }
              settings.success(res);
            }).error($rootScope.handleHttpError);
        
      
    };
    
   $rootScope.ofaapi = function (settings) {        
      $rootScope.showActivity();
    var final_url=$rootScope.getFinalurlofa();
   // console.log("final url"+final_url);
     $http.get(final_url+settings.url,settings.data).success(function (res) {
              
               $rootScope.hideActivity();
            if (settings.checkLogin && !$rootScope.validateLogin(res)) {
                return;
            }
              settings.success(res);
            }).error($rootScope.handleHttpError);
    
    
    };  
    
    
    var $activity = $('#activity_indicator,#dialog_overlay');
  $rootScope.getFinalurl=function (){
      var final_url='';
        if ($rootScope.language.language) {
            if($rootScope.language.language==='ar') {
            final_url=appConfig.url+"ar/";
            }else if($rootScope.language.language==='en'){
                final_url=appConfig.url;
            }
        
        }else{
           
           final_url=appConfig.url;

        }
        return final_url;
      
  };
   $rootScope.getFinalurlofa=function (){
      var final_url='';
        if ($rootScope.language.language) {
            if($rootScope.language.language==='ar') {
            final_url=appConfig.ofa_url+"ar/";
            }else if($rootScope.language.language==='en'){
                final_url=appConfig.ofa_url;
            }
        
        }else{
           
           final_url=appConfig.ofa_url;

        }
        return final_url;
      
  };
    $rootScope.showActivity = function () {
        $activity.show();
    };
    $rootScope.hideActivity = function () {
        $activity.hide();
    };
    $rootScope.hideActivity();

    $scope.cartCount = function () {
        var total = 0;
        $rootScope.cart.forEach(function (item) {
            total += item.qty;
        });
        return total;
    };
    $rootScope.getProductQty = function (id) {
       // alert("inside get product qty");
       //alert("all cart items--"+ JSON.stringify($rootScope.cart) );
        var items = $filter('filter')($rootScope.cart, {id: id}, true);
        //alert("items"+JSON.stringify(items) );
        if (items.length)
            return items[0].qty;
        return 0;
    };
    $rootScope.addProductToCart = function (id, qty, options) {
        //alert("add cart options"+ JSON.stringify(options));
        if(options.titles.length){
           // alert("present");
           
           
        }
        // alert("cart before save"+JSON.stringify($rootScope.cart));
        var items = $filter('filter')($rootScope.cart, {id: id}, true);
       // alert("add tocart filter items"+JSON.stringify(items));
        if (items.length){
            
            if(items[0].options.titles.length){
                
                var new_options=options;
               var flag=0;
            for(m=0;m<items.length;m++){
                if(flag==1){
                    break;
                }else{       
                
                    for(i=0;i<items[m].options.titles.length;i++){ //======custom option titles loop=====//
                        //options.titles[0].title

                       //alert("title--"+items[m].options.titles[i].title);
                       for(j=0;j<new_options.titles.length;j++){ //===== new cutom options titles loop=======//
                           //alert("new title--"+new_options.titles[j].title);
                           if(new_options.titles[j].title==items[m].options.titles[i].title){
                               //if(new_options.titles[j].val!=items[m].options.titles[i].val){
                              //     $rootScope.cart.push({id: id, qty: qty, options:new_options});
                               //}else 
                                   if(new_options.titles[j].val==items[m].options.titles[i].val){

                                    items[m].qty += qty;
                                    flag=1;

                               }

                           }

                       }

                     }
                }//====flag else end======
              }//=====top for end=====// 
              if(flag==0){
                  
                  $rootScope.cart.push({id: id, qty: qty, options:new_options});
              }
              
                
            }else{
            items[0].qty += qty;
           }
        } else{
            $rootScope.cart.push({id: id, qty: qty, options:options});
        }
       
        $rootScope.saveCart();
    };

    $rootScope.updateProductToCart = function (id, qty,options) {
        var items = $filter('filter')($rootScope.cart, {id: id}, true);
        //alert("qty ti up"+qty);
        //alert("items--"+JSON.stringify(items));
         var flag=0;
        if (items.length){
            
            if(items[0].options.titles.length){
                
                for(m=0;m<items.length;m++){
                 if(flag==1){
                    break;
                }else{
                     for(i=0;i<items[m].options.titles.length;i++){ 
                          for(j=0;j<options.titles.length;j++){
                              if(options.titles[j].title==items[m].options.titles[i].title){
                                  
                                   if(options.titles[j].val==items[m].options.titles[i].val){

                                        items[m].qty = qty;
                                        flag=1;

                                    }
                                  
                              }
                              
                          }
                      }
                    
                   }//======flag else end===//
                }//=====top for end=======//
                
                
            } else {
                
                 items[0].qty = qty;
                
            }
            
           
        }
        $rootScope.saveCart();
    };

    $rootScope.isLoggedIn = function () {
        return $rootScope.user && $rootScope.user.email;
    };
    $rootScope.handleClick = function (el) {
        el.focus();
    };

    $rootScope.checkLogin = function (noRedirect) {
        if (!$rootScope.user || !$rootScope.user.email) {
            $rootScope.saveUser({});
            if (!noRedirect)
                $rootScope.go('/account');
            return false;
        }
        return true;
    };

    $rootScope.validateLogin = function (res) {
        if (res.login == 0) {
            $rootScope.showMessage({
                'title': 'Login failed !!!',
                message: res.message
            });
            $rootScope.saveUser({});
            $rootScope.go('/account');
            return false;
        }
        return true;
    };

    $rootScope.isForm = false;
    var scrollClass = "app-native-scroll"
    $rootScope.htmlClass = function () {

        if ($rootScope.isForm) {
            return scrollClass + ' ' + 'form-html';
        }
        return scrollClass;
    };

});