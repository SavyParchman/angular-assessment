angular.module('assessment').controller('productDetailsCtrl', function($scope, $stateParams, shopService){
  $scope.Id = $stateParams.id;
  $scope.getProductDetails = function(){
        shopService.getProductDetails($scope.Id).then(response => {
          $scope.products = response.data;
        });
      }
  
      $scope.getProductDetails();
      })
  