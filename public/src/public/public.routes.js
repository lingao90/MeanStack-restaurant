(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.about', {
      url: '/about',
      templateUrl: 'src/public/about.html'
    })
    .state('public.awards', {
      url: '/awards',
      templateUrl: 'src/public/awards.html'
    })
    .state('public.blog1', {
      url: '/blog1',
      templateUrl: 'src/public/blog1.html'
    })
    .state('public.blog2', {
      url: '/blog2',
      templateUrl: 'src/public/blog2.html'
    })
    .state('public.blog', {
      url: '/blog',
      templateUrl: 'src/public/blog.html'
    });
    // .state('public.blog', {
    //   url: '/blog',
    //   templateUrl: 'src/public/blog/public/blog.html'
    // });
    // .state('public.home', {
    //   url: '/home',
    //   templateUrl: 'index.html'
    // });
}
})();
