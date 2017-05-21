// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ngMaterial', 'ngAnimate', 'ngAria','ui.router','firebase',"chart.js"]);
app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: "login"
    })

    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "templates/dashboard.html",
      controller: "dashboard",
     // loginCompulsory : true
    })
  
}) .config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts

    ChartJsProvider.setOptions({
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
      showLines: false
    });
    
    console.log(ChartJsProvider)
  }]);
/*.run(function($rootScope,$state){
    $rootScope.$on('$stateChangeStart',function(event,toState){
        var firebaseLocalToken = localStorage.getItem("token")
        if(toState.loginCompulsory && !firebaseLocalToken){            
            event.preventDefault() 
            $state.go("login")
        }
        
    })
});*/