angular.module('assessment').service('shopService', function($http) {
  this.getProducts = function() {
    return $http.get('https://practiceapi.devmountain.com/products/')
  }
  this.getProductDetails = function(id) {
    return $http.get('https://practiceapi.devmountain.com/products/' + id);  
  }
})