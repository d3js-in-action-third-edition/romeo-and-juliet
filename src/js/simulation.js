import { max } from "d3-array";
import { forceSimulation } from "d3-force";
import { select } from "d3-selection";
import { characters, houses } from "./helper";
import { getRadius } from "./scales";

export const runSimulation = (data) => {

  // Dimensions
  const width = 800;
  const height = 800;

  // Append SVG container
  const svg = select("#network")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g")
      .attr("transform", `translate(${width/2}, ${height/2})`);

  // Append nodes
  const maxLines = max(characters, d => d.totalLines);
  svg 
    .selectAll(".node")
    .data(characters)
    .join("circle")
      .attr("class", ".node")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", d => getRadius(maxLines, d.totalLines))
      .attr("fill", d => {
        switch (d.id) {
          case "ROMEO":
          case "JULIET":
            return "#FAFBFF";
          default:
            return houses.find(h => h.house === d.house).color;
        };
      })
      .attr("stroke", d => houses.find(h => h.house === d.house).color)
      .attr("stroke-width", 5)
      .attr("fill-opacity", d => d.importance === "primary" ? 1 : 0.4)
      .attr("stroke-opacity", d => d.importance === "primary" ? 1 : 0.4);

  // forceSimulation(data)

};