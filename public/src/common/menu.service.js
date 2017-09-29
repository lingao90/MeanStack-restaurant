(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath','Upload'];
function MenuService($http, ApiPath,Upload) {
  var service = this;

  // service.getCategories = function () {
  //   return $http.get(ApiPath + '/categories.json').then(function (response) {
  //     return response.data;
  //   });
  // };
  service.getCategories = function () {
    return $http.post('menuCategory/').then(function (response) {
      return response.data;
    });
  };


  // service.getMenuItems = function (category) {
  //   var config = {};
  //   if (category) {
  //     config.params = {'category': category};
  //   }

  //   return $http.get('menuCategory/menuItems', config).then(function (response) {
  //     return response.data;
  //   });
  // };

  // service.getMenuItems = function (shortName) {
  //   var config = {};
  //   if (shortName) {
  //     config.params = {category: shortName};
  //   }

  //   return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
  //     return response.data;
  //   });
  // }
  service.getMenuItems = function (shortName) {
    var config = {};
    if (shortName) {
      config.params = {category: shortName};
    }

    return $http.post('menuCategory/menuItems', config.params).then(function (response) {
      return response.data;
    });
  }


  service.getCategory = function (shortName) {
    var config = {};
    if (shortName) {
      config.params = {category: shortName};
    }
    return $http.get('menuCategory/', config.params ).then(function (response) {
      return response.data;
    }); 
  };

  service.getMenuItem = function (shortName) {
    var config = {};
    if (shortName) {
      config.params = {category: shortName};
    }

    return $http.post('menuCategory/menuItems', config.params).then(function (response) {
      return response.data;
    });
  }
  // service.getMenuItem = function(shortName) {
  //   return $http.get(ApiPath + '/menu_items/' + shortName + '.json')
  //   .then(function(response) {
  //     return response.data;
  //   });
  // };


  service.saveMenuItem = function (menuItem) {
    
    return $http.post('menuCategory/menuEdit', menuItem).then(function (response) {
      return response.data;
    });
  };

}



})();
