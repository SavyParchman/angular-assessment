angular.module('assessment').controller('shopCtrl', function($scope, shopService, $state) {
  shopService.getProducts().then(function(response){
	  $scope.products = response.data;
	  return response.data
    console.log(response)
    })
	});
