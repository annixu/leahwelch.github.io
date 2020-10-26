

var promises = [
    d3.csv("./data/eras.csv"), 
    d3.csv("./data/Wardrobe.csv")
];
Promise.all(promises).then(function(wardrobedata) {

    var eras = wardrobedata[0];
    var wardrobe = wardrobedata[1];

    console.log(wardrobe);

    var tops = wardrobe.filter(function(d) {
        return d.Category === "Tops";
    });

    console.log(tops);

    var maxItems = tops.length;
    console.log(maxItems);

    var bottoms = wardrobe.filter(function(d) {
        return d.Category === "Bottoms";
    });

    console.log(bottoms);

    var dresses = wardrobe.filter(function(d) {
        return d.Category === "Dresses & Jumpsuits";
    });

    console.log(dresses);

    var outerwear = wardrobe.filter(function(d) {
        return d.Category === "Outwear";
    });

    console.log(outerwear);

    var sets = wardrobe.filter(function(d) {
        return d.Category === "Sets";
    });

    console.log(sets);

    var width = document.querySelector("#chartcontainer").clientWidth;
    var height = document.querySelector("#chartcontainer").clientHeight;
    var margin = {top: 0, left: 0, right: 0, bottom: 100};
    
    var svg = d3.select("#chartcontainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    var widthT = document.querySelector("#timeline").clientWidth;
    var heightT = document.querySelector("#timeline").clientHeight;
    var marginT = {top: 0, left: 0, right: 0, bottom: 0};
    
    var svgT = d3.select("#timeline")
        .append("svg")
        .attr("width", widthT)
        .attr("height", heightT);

    var xScale = d3.scaleBand()
        .domain(wardrobe.map(function(d) { return d.Category; }))
        .range([width-margin.right, width/2])
        .padding(1);
    
    var yScale = d3.scaleLinear()
        .domain([0, maxItems])
        .range([height-margin.bottom, margin.top]);

    var yScaleT = d3.scaleLinear()
        .domain([1, 60])
        .range([0, heightT]);

    var yAxisGenerator = d3.axisRight(yScaleT)
        .tickSize(-20)
        .ticks(60);

    var yAxis = svgT.append("g")
        .attr("class","axis")
        .attr("transform", `translate(${widthT/2+10},0)`)
        .call(yAxisGenerator);

    yAxis.selectAll(".tick text")
        .attr("class", "sideLabels")
        .style("visibility", "hidden");

    var lineT = svgT.append("line")
        .attr("x1", widthT/2)
        .attr("x2", widthT/2)
        .attr("y1", function() {
            return yScaleT(1);
        })
        .attr("y2", function() {
            return yScaleT(60);
        })
        .attr("stroke", "#a08875");

    var topsG = svg.append("g").attr("class", "topsG")

    topsG.selectAll("rect").data(tops)
        .enter()
        .append("rect")
        .attr("x", function() {
            return xScale("Tops")
        })
        .attr("y", function(d) { return yScale(d.ypos); })
        .attr("width", 40)
        .attr("height", 10)
        .attr("fill", function(d) { return d.Primary_Color; })
        .attr("rx", 2)								
		.attr("ry", 2);
        //.style("opacity", 0.2);

    var bottomsG = svg.append("g").attr("class", "bottomsG")

    bottomsG.selectAll("rect").data(bottoms)
        .enter()
        .append("rect")
        .attr("x", function() {
            return xScale("Bottoms")
        })
        .attr("y", function(d) { return yScale(d.ypos); })
        .attr("width", 40)
        .attr("height", 10)
        .attr("fill", function(d) { return d.Primary_Color; })
        .attr("rx", 2)								
		.attr("ry", 2);
        //.style("opacity", 0.2);

    var dressesG = svg.append("g").attr("class", "dressesG")

    dressesG.selectAll("rect").data(dresses)
        .enter()
        .append("rect")
        .attr("x", function() {
            return xScale("Dresses & Jumpsuits")
        })
        .attr("y", function(d) { return yScale(d.ypos); })
        .attr("width", 40)
        .attr("height", 10)
        .attr("fill", function(d) { return d.Primary_Color; })
        .attr("rx", 2)								
		.attr("ry", 2);
        //.style("opacity", 0.2);

    var setsG = svg.append("g").attr("class", "setsG")

    setsG.selectAll("rect").data(sets)
        .enter()
        .append("rect")
        .attr("x", function() {
            return xScale("Sets")
        })
        .attr("y", function(d) { return yScale(d.ypos); })
        .attr("width", 40)
        .attr("height", 10)
        .attr("fill", function(d) { return d.Primary_Color; })
        .attr("rx", 2)								
		.attr("ry", 2);
        //.style("opacity", 0.2);

    var outerwearG = svg.append("g").attr("class", "outerwearG")

    outerwearG.selectAll("rect").data(outerwear)
        .enter()
        .append("rect")
        .attr("x", function() {
            return xScale("Outwear")
        })
        .attr("y", function(d) { return yScale(d.ypos); })
        .attr("width", 40)
        .attr("height", 10)
        .attr("fill", function(d) { return d.Primary_Color; })
        .attr("rx", 2)								
		.attr("ry", 2);
        //.style("opacity", 0.2);


});