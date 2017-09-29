// var app = angular.module("app", []);
// app.controller("listController", ["$scope","$http",
// function($scope,$http) {
//     $scope.getData = function()
//     {
//         $http.get('youtube.json').then(function (response){
//             $scope.details  = response.data;    
//         });
//     };
//     $scope.submit = function()
//     {
//         $scope.details.push($scope.detail);
//         $http.post('youtube.json', $scope.details);
//     }
// }]);

(function () {
"use strict";

angular.module('public')
.controller('BlogAddController', BlogAddController);

// MenuController.$inject = ['menuCategories'];
BlogAddController.$inject = ['$scope','$http'];
    function BlogAddController($scope,$http) {
        // $scope.blogs = [];
        // $scope.article = [];
        var url = "src/public/blogpage/blog.json";

            $http.get(url).then( function(response) {
               $scope.blogs = response.data;
            });
        // var url = "src/public/blogpage/blog.json";
        //      $scope.getData = function()
        //     {
        //         $http.get('url').then(function (response){
        //             $scope.articles  = response.data;    
        //         });
        //     };
            $scope.submit = function()
            {   
                
                
                $scope.blogs.push($scope.article);//console.log($scope.blogs);
                $http.post('/#/blog1', $scope.blogs).then(function(data, status, headers, config){
                    console.log($scope.blogs);
                });
            }
    }

})();

