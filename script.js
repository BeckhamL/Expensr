<!--jQuery-->
$(document).ready(function() {
	
	$(document).keypress(function(e) {
	
		if(e.which == 13) {
       		
  		}
	});
	$('.header').mouseenter(function() {
		$('.header').fadeTo('fast',0.7);
	});
	$('.header').mouseleave(function() {
		$('.header').fadeTo('fast',1);
	});
});

<!-- Logger -->
$.log = function(message){
  var $logger = $("#logger");
  $logger.html($logger.html() + "\n * " + message );
}

<!--angular-->
angular.module('myApp', [])
	.controller('controller', function($scope) {
    $scope.yourName;

});