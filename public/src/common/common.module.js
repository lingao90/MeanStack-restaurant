(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', './')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
