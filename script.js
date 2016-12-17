<!--jQuery-->

$(window).on("scroll touchmove", function () {
  $('#header_nav').toggleClass('tiny', $(document).scrollTop() > 0);
});

$(document).ready(function() {
	
	$(document).keypress(function(e) {
	
		if(e.which == 13) {
       		$(e).hide();
  		}
	});
	$('.header').mouseenter(function() {
		$('.header').fadeTo('fast',0.7);
	});
	$('.header').mouseleave(function() {
		$('.header').fadeTo('fast',1);
	});
});

<!--angular-->

angular.module('myApp', [])
	.controller('controller', function($scope) {
    $scope.yourName;
});

angular.module('count', [])
	.controller('countdown',function($scope) {
	$scope.myValue = "80";
});
	
<!-- D3 -->

function start(){
	d3.select("body")
	.append("p")
	.text("load text")
}
function svg(){

	var canvas = d3.select("body")
	.append('svg')
	.attr("width",700)
	.attr("height",700)

	var circle = canvas.append("circle")
	.attr("cx",50)
	.attr("cy",50)
	.attr("r",50)
	.attr("fill", "blue")
}