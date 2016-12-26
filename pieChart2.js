function male1female() {

    var myData = [50, 80, 53, 71, 29];

    var color = d3.scaleOrdinal()
        .range(['#00cc66', ' #000099','#00ff00', '#00ccff', '#ffff00','#ff0066']);

    var canvas = d3.select('#canvas2').append('svg')
        .attr('align','center')
        .attr('width', 1200)
        .attr('height', 1200);

    //positioning of the SVG
    var group = canvas.append('g')
    //X,Y

    var arc = d3.arc()
        .innerRadius(155)
        .outerRadius(300);

    var pie = d3.pie()
        .value(function(d) {
            return d;
        });

    var arcs = group.selectAll('.arc')
        .data(pie(myData))
        .enter()
        .append('g')
        .attr('class', 'arc');

    arcs.append('path')
        .attr('d', arc)
        .attr('fill', function(d) {
            return color(d.data);
        });

    arcs.append('text')
        .attr('transform', function(d) {
            return 'translate(' + arc.centroid(d) + ')';
        })
        .attr('text-anchor', 'middle')
        .attr('font-size', '1.5em')
        .attr('font-family', 'Fjalla One')
        .text(function(d) {
            return d.data;
        });
}
