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

    $scope.keypress = function($event) {

      $scope.first = 1;
        var keyCode = $event.which || $event.keyCode;
        if (keyCode == 13){
          return $scope.first;
        }
    };

});
