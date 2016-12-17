<!--jQuery-->

$(window).on("scroll touchmove", function() {
    $('#header_nav').toggleClass('tiny', $(document).scrollTop() > 0);
});

$(document).ready(function() {

    $('.header').mouseenter(function() {
        $('.header').fadeTo('fast', 0.7);
    });
    $('.header').mouseleave(function() {
        $('.header').fadeTo('fast', 1);
    });
});

<!--angular-->

var app1 = angular.module('myApp', []);

app1.controller('controller', function($scope) {
    $scope.yourName;
    $scope.first = 1;
    $scope.second = 3;

    $scope.keypress = function() {
        $scope.enter = $scope.first + ' + ' + $scope.second + ' = ' + (+$scope.first + $scope.second);
    };
});
