'use strict';

var app= angular.module('myApp.classe', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/classe', {
    templateUrl: 'classe/classe.html',
    controller: 'classeCtrl'
  });
}])

app.controller('classeCtrl', ['all', function (all) {

    var self = this;

    GetClassesAll().then(function (response) {

        self.classes = response.data;

        console.log('classes: ' + self.classes);

    });
}]);


app.service('all', function ($http) {

    self.GetClassesAll = function () {
        var url = "http://localhost:8080/rest/classes/all";

        return $http({
            method: 'GET',
            url: url
        });
    };

});

