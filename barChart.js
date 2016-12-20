function barz() {

  var margin = {top :20 ,right: 20, left: 40, bottom:30 },
  width = 950;
  height = 500;

  var x = d3.scaleOrdinal()
    .rangeBands([0,width],.1);

  var y = d3.scaleLinear()
    .range([0,height],0);

  var xAxis = d3.svg.axis()
    .scale(x);

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left');

}
