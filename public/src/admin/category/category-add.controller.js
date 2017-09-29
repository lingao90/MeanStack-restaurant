(function () {
"use strict";

angular.module('admin')
.controller('CategoryAddController', CategoryAddController);

CategoryAddController.$inject = ['MenuService', 'ApiPath', 'Upload','$http'];
function CategoryAddController(MenuService, ApiPath, Upload,$http) {
  var $ctrl = this;
   $ctrl.save = function () {
    $ctrl.ImageUpload($ctrl.category,$ctrl.file);

  };

  $ctrl.ImageUpload = function(dataJson,image) {
    
    if(image){
      return Upload.upload ({
        url: '/upload',
        file:image,
        data:{
          short_name:dataJson.short_name
        }
      }).then(function (resp) { 
        console.log(resp.data.fileName);
        if(resp.data.fileName){ //validate success
          dataJson.url=resp.data.fileName
            return $http.post('/menuCategory/addCategory', dataJson)
        }
      })
    }
      
    
  };
}


})();
