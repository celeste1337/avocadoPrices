//hi future celeste

let svg, data, xScale, yScale;
let width = 800;
let height = 600;

let margin = {
    top: 10,
    left: 10,
    bottom: 10,
    right:10
};

let parseTime = d3.timeParse('%Y-%m-%d');

function rowConverter(d) {
    //date,averagePrice,totalBags,type,year
    return {
        date: d.date,
        avgPrice: d.averagePrice,
        total: d.totalBags,
        type: d.type,
        year: d.year,
    }
}

d3.csv('data/avocado-cleaned.csv', rowConverter).then(function (dataReturned) {
    data = dataReturned;
    console.table(data);

    makeChart();
    makeScales();
    makeRects();
})

function makeChart() {
    svg = d3.select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
}

function makeScales() {
    xScale = d3.scaleLinear()
        .domain([d3.min(data, d=> d.year), d3.max(data, d=> d.year)])
        .range([0, width]);
    
    yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d=> d.avgPrice)])
        .range([height, 0]);
}

function makeRects() {
    svg.append('g')
        .selectAll('g')
        .data(data)
        .join('g')
        .attr('width', 50)
}