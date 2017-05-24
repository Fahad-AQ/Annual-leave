app.controller("login",function($scope,$rootScope,$http,$state,userService){ 
        $scope.loader = true;
        $scope.user = "";
        setTimeout(function () {
            $scope.user =  userService.user;
            $scope.loader = false;
            $scope.$apply();
        },500);
          $scope.goToDashboard=function(){      
              $state.go("app.dashboard");
            };
         $scope.googleLogin=function(){      
               var provider = new firebase.auth.GoogleAuthProvider();
                provider.addScope(' https://www.googleapis.com/auth/userinfo.email');
                firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                $state.go("app.dashboard");
                }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ..
                });
            };
    }).controller("menu",function($scope,userService,$mdSidenav,$timeout,$state){
            $scope.labels = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];
            $scope.series = ['Leaves'];
            $scope.data = [
                [2, 8, 2, 3, 4, 8, 7,9,5,4,3,4]
            ];
            $scope.options = {
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 24,
                            min: 0,
                            stepSize: 2
                        },
                       
                    }
                     ]
                },
                paddingTop: 50,
            }
            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
            
            // Simulate async data update
            $timeout(function () {
                $scope.data = [
                 [2, 8, 2, 3, 4, 8, 7,9,5,4,3,4]
                ];
            }, 3000);
            $scope.user = "";
                setTimeout(function () {
                    $scope.user =  userService.user;
                    $scope.$apply();
                },500);
            $scope.showMobileMainHeader = true;
            $scope.openSideNavPanel = function() {
                $mdSidenav('left').open();
            };
            $scope.closeSideNavPanel = function() {
                $mdSidenav('left').close();
            };
            $scope.logout = function (){
            firebase.auth().signOut().then(function() {
               $scope.user ="";
               userService.user = "";
               $state.go("login");
                }).catch(function(error) {
               console.log(error)
                });
            }
            
    })
    .controller("dashboard",function($scope,userService,$mdSidenav,$timeout,$state){
            $scope.labels = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];
            $scope.series = ['Leaves'];
            $scope.data = [
                [2, 8, 2, 3, 4, 8, 7,9,5,4,3,4]
            ];
            $scope.options = {
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 24,
                            min: 0,
                            stepSize: 2
                        },
                       
                    }
                     ]
                },
                paddingTop: 50,
            }
            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
            
            // Simulate async data update
            $timeout(function () {
                $scope.data = [
                 [2, 8, 2, 3, 4, 8, 7,9,5,4,3,4]
                ];
            }, 3000);
            $scope.user = "";
                setTimeout(function () {
                    $scope.user =  userService.user;
                    $scope.$apply();
                },500);
            
    })
     .controller("annualForm",function($scope,userService,$mdSidenav,$timeout,$state,$http){
          
            $scope.submitEmail = function (){
                 $http
            }
    })
    
    
    .service("userService",function ($timeout) {
        var vm = this; 
        vm.user = "";
        vm.getUser = function (user) {
            vm.user = user;
            }
         firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                 vm.getUser(user.providerData[0]);
                } else {
                 vm.getUser("");
                }
        });
        
        
    })
