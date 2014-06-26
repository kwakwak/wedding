'use strict';

describe('Directive: btnLoading', function () {

  // load the directive's module
  beforeEach(module('weddingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<btn-loading></btn-loading>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the btnLoading directive');
  }));
});
