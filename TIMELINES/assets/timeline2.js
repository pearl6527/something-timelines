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
}
