'use strict';

/*var app =*/ angular.module('myApp.view1', ['ngRoute'])

/*
app.service(){

};

self.GetUsersAll = function () {
    var url = "http://localhost:8080/rest/users/all";

    return $http({
        method: 'GET',
        url: url
    });
}; */


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function () {

    var self = this;

    self.info = "test";


}]);