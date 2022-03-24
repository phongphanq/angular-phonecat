'use strict';

angular.
  module('phoneHistory')
  .directive('phoneHistory', ['Phone', function (Phone) {
    return {
      templateUrl: 'phone-history/phone-history.template.html',
      controller:  ['$scope', 'Phone', function PhoneHistoryController($scope, Phone) {
          var phones = Phone.query();
          phones.$promise.then(function () {
            $scope.phones = phones.slice(0, 5);
          })
      
          $scope.getDetailUrl = function (phone) {
            return '#!/phones/' + phone.id;
          }
        }]
    };
  }]);