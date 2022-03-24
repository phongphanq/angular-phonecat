'use strict';

describe('interger validator', function () {
    var $scope, form;
    beforeEach(module('core.validator'));
    beforeEach(inject(function ($compile, $rootScope) {
        $scope = $rootScope;
        var element = angular.element(
            '<form name="form">' +
            '<input ng-model="model.somenum" name="somenum" integer />' +
            '</form>'
        );
        $scope.model = { somenum: null }
        $compile(element)($scope);
        form = $scope.form;
    }))

    it('should pass when empty', function () {
        form.somenum.$setViewValue('');
        $scope.$digest();
        expect($scope.model.somenum).toEqual('');
        expect(form.somenum.$valid).toBe(true);
    });
    it('should pass with integer', function () {
        form.somenum.$setViewValue('3');
        $scope.$digest();
        expect($scope.model.somenum).toEqual('3');
        expect(form.somenum.$valid).toBe(true);
    });
    it('should not pass with decimal', function () {
        form.somenum.$setViewValue('3.3');
        $scope.$digest();
        expect($scope.model.somenum).toBeUndefined();
        expect(form.somenum.$valid).toBe(false);
    });
    it('should not pass with string', function () {
        form.somenum.$setViewValue('a');
        $scope.$digest();
        expect($scope.model.somenum).toBeUndefined();
        expect(form.somenum.$valid).toBe(false);
    });
});