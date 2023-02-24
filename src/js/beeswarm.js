import { forceSimulation, forceX, forceY, forceCollide } from "d3-force";
import { select, selectAll } from "d3-selection";
import { max } from "d3-array";
import { scaleLinear } from "d3-scale";
import { getRadius, charColorScale } from "./scales";
import { totalLines, scenes } from "./helper";

export const drawBeeswarm = (nodes) => {

  const characters = JSON.parse(JSON.stringify(nodes));
  console.log("characters", characters);

  // Dimensions
  const width = 1140;
  const height = 400;
  const margin = { top: 0, right: 100, bottom: 0, left: 100 };
  const innerWidth = width - margin.right - margin.left;
  const innerHeight = height - margin.top - margin.bottom;

  // Horizontal scale
  const xScale = scaleLinear()
    .domain([0, totalLines])
    .range([0, width])

  // Append SVG container
  const svg = select("#beeswarm")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
    // .append("g")
    //   .attr("transform", `translate(${width/2}, ${height/2})`);
    .append("g")
      .attr("transform", `translate(${margin.left}, ${height/2})`);

  // Append nodes
  const maxLines = max(characters, d => d.totalLines);
  svg
    .selectAll(".beeswarm-circle")
    .data(characters)
    .join("circle")
      .attr("class", "beeswarm-circle")
      .attr("cx", d => xScale(d.firstLineNumber))
      .attr("cy", 0)
      .attr("r", d => {
        d["radius"] = getRadius(maxLines, d.totalLines);
        return d.radius;
      })
      .attr("fill", d => charColorScale(d.house))
      .attr("stroke", "#FAFBFF")
      .attr("stroke-width", 1);

  // Set up the simulation
  const updateNetwork = () => {
    selectAll(".beeswarm-circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  };

  // const simulation = forceSimulation()
  //   .force("x", forceX() )
  //   .nodes(characters)
  //   .on("tick", updateNetwork);

  // const simulation = forceSimulation()
  //   .force("y", forceY() )
  //   .nodes(characters)
  //   .on("tick", updateNetwork);

  // const simulation = forceSimulation()
  //   .force("x", forceX().strength(0.001) )
  //   .force("y", forceY().strength(0.001) )
  //   .force("collide", forceCollide().radius(d => d.radius) )
  //   .nodes(characters)
  //   .on("tick", updateNetwork);

  const simulation = forceSimulation()
    .force("x", forceX(d => xScale(d.firstLineNumber)).strength(1) )
    .force("y", forceY().strength(0.1) )
    .force("collide", forceCollide().radius(d => d.radius) )
    .nodes(characters)
    .on("tick", updateNetwork);

  // Append horizontal axis
  svg
    .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", xScale(totalLines))
      .attr("y2", 0)
      .attr("stroke", "#161B33")
      .attr("stroke-width", 2);

  svg
    .selectAll(".scene-tick")
    .data(scenes)
    .join("line")
      .attr("class", "scene-tick")
      .attr("x1", d => xScale(d.firstLine))
      .attr("y1", 0)
      .attr("x2", d => xScale(d.firstLine))
      .attr("y2", 8)
      .attr("stroke", "#161B33");

  const sceneLabels = ["1.1", "2.1", "3.1", "4.1", "5.1"];
  svg
    .selectAll(".scene-label")
    .data(scenes.filter(s => sceneLabels.includes(s.scene)))
    .join("text")
      .attr("x", d => xScale(d.firstLine))
      .attr("y", 28)
      .attr("text-anchor", "middle")
      .text(d => d.scene)
      .style("font-size", "16px")
      .style("font-weight", 500);


  // Add interactions
  selectAll(".beeswarm-circle")
    .on("mouseenter", (e, d) => {
      select(".beeswarm-legend-name").text(d.name);
      select(".beeswarm-legend-description").text(d.description);
      select(".beeswarm-legend-line .legend-line").text(`“ ${d.firstLine} ”`);
      select(".beeswarm-legend").classed("hidden", false);
    })
    .on("mouseleave", (e, d) => {
      select(".beeswarm-legend").classed("hidden", true);
    });

};