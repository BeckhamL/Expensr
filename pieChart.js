function svg() {

    var canvas = d3.select("body")
        .append('svg')
        .attr('width', 700)
        .attr('length', 700)

    var circle = canvas.append("circle")
      .attr('cx',50)
      .attr('cy',50)
      .attr('r',50)
      .attr('fill','blue')


}
