(function () {
"use strict";

angular.module('public')
.controller('BlogController', BlogController);

// MenuController.$inject = ['menuCategories'];
BlogController.$inject = ['$scope','$http'];
function BlogController($scope,$http) {
            var url = "src/public/blogpage/blog.json";

            $http.get(url).then( function(response) {
               $scope.blogs = response.data;
            });
         }
})();



