function male2female() {

    var data = [50, 80, 53, 71, 29];

    var color = ['red','blue'];

    var colorscale = d3.scaleLinear().domain([0, data.length]).range(color);

    var canvas = d3.select('#canvas').append('svg')
        .attr('width', 1200)
        .attr('height', 1200);

    //positioning of the SVG
    var group = canvas.append('g')
        //X,Y
        .attr('transform', 'translate(675, 650)');

    var arc = d3.arc()
        .innerRadius(155)
        .outerRadius(300);

    var arcOver = d3.arc()
        .innerRadius(155)
        .outerRadius(300 + 30);

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
        .attr('fill', function(d, i) {
            return colorscale(i);
        })
        .on("mouseover", function(d) {
            d3.select(this).transition()
                .duration(1000)
                .attr("d", arcOver);
        })
        .on("mouseout", function(d) {
            d3.select(this).transition()
                .duration(1000)
                .attr("d", arc);
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
