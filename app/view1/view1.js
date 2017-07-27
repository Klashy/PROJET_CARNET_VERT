'use strict';

var app = angular.module('myApp.view1', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

app.controller('View1Ctrl', ['all', function (all) {

    var self = this;

    self.info = "test";
    self.parents;

    GetUsersAll().then(function (response) {

        self.tab = response.data;

        console.log('parents: ' + self.tab);

    });

    GetClassesAll().then(function (response) {

        self.tab = response.data;

        console.log('classes: ' + self.tab);

    });

}])

app.service('all', function($http){

    self.GetUsersAll = function () {
        var url = "http://localhost:8080/rest/parents/all";

        return $http({
            method: 'GET',
            url: url
        });
    };

    self.GetClassesAll = function () {
        var url = "http://localhost:8080/rest/classes/all";

        return $http({
            method: 'GET',
            url: url
        });
    };

});

