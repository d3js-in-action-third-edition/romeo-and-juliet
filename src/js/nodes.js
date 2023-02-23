import { select } from "d3-selection";
import { max } from "d3-array";
import { characters, houses } from "./helper";
import { getRadius } from "./scales";
import { runSimulation } from "./simulation";

export const appendNodes = () => {

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
      .attr("class", "node")
      .attr("cx", 0)
      .attr("cy", 0)
      // .attr("r", d => {
      //   d["radius"] = getRadius(maxLines, d.totalLines);
      //   return d.radius;
      // })
      .attr("r", 6)
      .attr("fill", d => houses.find(h => h.house === d.house).color)
      // .attr("fill", d => d.id === "ROMEO" || d.id === "JULIET"
      //   ? "#FAFBFF"
      //   : houses.find(h => h.house === d.house).color
      // )
      // .attr("stroke", d => d.id === "ROMEO" || d.id === "JULIET"
      //   ? houses.find(h => h.house === d.house).color
      //   : "none"
      // )
      // .attr("stroke-width", 5)
      .attr("fill-opacity", d => d.importance === "primary" ? 1 : 0.4)
      .attr("stroke-opacity", d => d.importance === "primary" ? 1 : 0.4);

  // Call the simulation
  runSimulation();

}