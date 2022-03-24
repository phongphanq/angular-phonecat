'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$rootScope', 'Phone',
      function PhoneListController($rootScope, Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';

        this.changeLanguage = function (key) {
          $rootScope.changeLanguage(key);
          //alert(key);
        };
        //alert($rootScope.lang);

        this.getDetailUrl = function(phone){
          return '#!/phones/' + phone.id;
        }
      }
    ]
  });
