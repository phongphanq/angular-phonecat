'use strict';

// Register `phoneEdit` component, along with its associated controller and template
angular.
  module('phoneEdit').
  component('phoneEdit', {
    templateUrl: 'phone-edit/phone-edit.template.html',
    controller: ['$routeParams', '$location', 'Phone',
      function PhoneEditController($routeParams, $location, Phone) {
        var self = this;
        self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
        });

        self.updatePhone = function () {
          //self.phone.$update();
          alert('ok');
          $location.path('/phones');
        };
      }
    ]
  });