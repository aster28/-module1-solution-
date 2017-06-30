
(function(){
 use strict;
 angular.module( 'LunchCheck' ,[])
   
.controller(' LunchCheckController ',function($scope){
  $scope.check = function(){
    var arr =  $scope.user.split(',');
    var deep = arr.length;
    if (deep <=3){
      $scope.user="Enjoy";
    
    }elif(deep>3){
    
      $scope.user="Too much!";
    }elif(deep=""){
    
      $scope.user="Please enter data first";
    }
    
     
  }
})


})();
