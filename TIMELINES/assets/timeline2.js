document.addEventListener("DOMContentLoaded", function () {
  drawChart(
    "#timelineChart",
    "https://raw.githubusercontent.com/tonyyao08/HackRice2020/master/eventsdata.json",
    "Chart"
  );
  drawChart(
    "#timelineChart1",
    "https://raw.githubusercontent.com/pearl6527/something-timelines/master/TIMELINES/assets/somedata.json",
    "Chart1"
  );
});

function drawChart(selector, file_path, chart_id) {
  const svg = d3
    .select(selector)
    .append("svg")
    .attr("id", chart_id)
    .attr("width", "100%")
    .attr("height", 500);
    
  d3.json(file_path).then(function(data) {
    svg
      .append("line")
      .attr("class", "timeline-base")
      .attr("x1", 0)
      .attr("y1", 100)
      .attr("x2", "90%")
      .attr("y2", 100);
  // Get the value of the svg to for scaleLinear
  })
}
