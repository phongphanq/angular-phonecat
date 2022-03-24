'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider', '$translateProvider',
    function config($routeProvider, $translateProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/phones/:phoneId/edit', {
          template: '<phone-edit></phone-edit>'
        }).
        otherwise('/phones');

      $translateProvider
        .useStaticFilesLoader({
          prefix: 'locales/locale-',
          suffix: '.json'
        })
        .useSanitizeValueStrategy('sanitizeParameters')
        .preferredLanguage('en');
    }
  ]);

angular.module('phonecatApp')
  .run(['$rootScope', '$translate', function ($rootScope, $translate) {
    $rootScope.lang = 'en';
    $rootScope.changeLanguage = function (key) {
      $rootScope.lang = key;
      $translate.use(key);
    };
  }])

// angular.module('phonecatApp')
//   .controller('LanguageController', ['$scope', '$rootScope', '$translate',
//     function ($scope, $rootScope, $translate) {
//       $scope.changeLanguage = function (key) {
//         $rootScope.lang = key;
//         $translate.use(key);
//       };
//     }]);
