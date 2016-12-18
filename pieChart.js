function male2female() {

    var data = [10, 80];

    var color = d3.scaleOrdinal()
        .range(['#ffff00', '#00ff00']);

    var canvas = d3.select('#canvas').append('svg')
        .attr('width', 1200)
        .attr('height', 1200);

    //positioning of the SVG
    var group = canvas.append('g')
    //X,Y
        .attr('transform', 'translate(350, 650)');

    var arc = d3.arc()
        .innerRadius(200)
        .outerRadius(300);

    var pie = d3.pie()
        .value(function(d) {
            return d;
        });

    var arcs = group.selectAll('.arc')
        .data(pie(data))
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
