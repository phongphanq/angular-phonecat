'use strict';

angular.
  module('core.validator', [])
  .directive('integer', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.integer = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true;
          }
        
          var INTEGER_REGEXP = /^-?\d+$/;
          if (INTEGER_REGEXP.test(viewValue)) {
            // it is valid
            return true;
          }
  
          // it is invalid
          return false;
        };
      }
    };
  });